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
  L as _,
  O as v,
  R as y,
  T as b,
  U as x,
  b as S,
  dt as C,
  k as w,
  mt as T,
  nt as E,
  pt as D,
  r as O,
  st as k,
  t as A,
  tt as j,
  u as M,
  w as N,
  x as P,
} from "./framer.w0XhpZTx.mjs";
import { i as F, n as ee, r as I, t as L } from "./cLmGr4YRT.DQnmJDS3.mjs";
import { i as te, n as R, r as z, t as B } from "./nBjcbhcMb.CUwcX5Fg.mjs";
import { i as V, n as H, r as ne, t as U } from "./alugMyyVf.cGUgRcft.mjs";
import { n as W, t as G } from "./cQxXulDZM.DXXtl8ZX.mjs";
import {
  _ as re,
  a as ie,
  b as ae,
  c as oe,
  d as se,
  f as ce,
  g as le,
  h as ue,
  i as de,
  l as fe,
  m as pe,
  n as me,
  o as he,
  p as ge,
  r as _e,
  s as ve,
  t as ye,
  u as be,
  v as xe,
  y as Se,
} from "./ZlI9vF_uo.B_LVJf_m.mjs";
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  q,
  Pe = e(() => {
    (s(),
      x(),
      m(),
      u(),
      W(),
      (Ce = g(G)),
      (we = [`MQ15Am0Ey`, `eZDuTqKCE`, `fqVd4WNKU`]),
      (Te = `framer-2jiF5`),
      (Ee = {
        eZDuTqKCE: `framer-v-e8da73`,
        fqVd4WNKU: `framer-v-1y90pwh`,
        MQ15Am0Ey: `framer-v-ayrusk`,
      }),
      (De = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (Oe = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ke = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (Ae = d.create(r)),
      (je = { "Variant 2": `eZDuTqKCE`, "Variant 3": `fqVd4WNKU`, Default: `MQ15Am0Ey` }),
      (Me = ({ height: e, id: t, image: n, mouseEnter: r, width: i, ...a }) => ({
        ...a,
        cYMryRtIV: n ??
          a.cYMryRtIV ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000 1000w`,
          },
        RcXo4l725: r ?? a.RcXo4l725,
        variant: je[a.variant] ?? a.variant ?? `MQ15Am0Ey`,
      })),
      (Ne = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = T(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = k(),
            m = E(),
            {
              style: g,
              className: _,
              layoutId: b,
              variant: x,
              cYMryRtIV: w,
              RcXo4l725: T,
              ...O
            } = Me(e),
            {
              baseVariant: N,
              classNames: F,
              clearLoadingGesture: ee,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: te,
              setGestureState: R,
              setVariant: z,
              variants: B,
            } = D({
              cycleOrder: we,
              defaultVariant: `MQ15Am0Ey`,
              ref: a,
              variant: x,
              variantClassNames: Ee,
            }),
            V = Ne(e, B),
            { activeVariantCallback: H, delay: ne } = j(N),
            U = H(async (...e) => {
              if ((R({ isHovered: !0 }), T && (await T(...e)) === !1)) return !1;
            }),
            W = v(Te);
          return (
            C(),
            o(p, {
              id: b ?? s,
              children: o(Ae, {
                animate: B,
                initial: !1,
                children: o(ke, {
                  value: De,
                  children: o(d.div, {
                    ...O,
                    ...I,
                    className: v(W, `framer-ayrusk`, _, F),
                    "data-border": !0,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: V,
                    layoutId: `MQ15Am0Ey`,
                    onMouseEnter: U,
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
                    ...K(
                      {
                        eZDuTqKCE: { "data-framer-name": `Variant 2` },
                        fqVd4WNKU: { "data-framer-name": `Variant 3` },
                      },
                      N,
                      L
                    ),
                    children: c(d.div, {
                      className: `framer-i0tqor`,
                      layoutDependency: V,
                      layoutId: `sWAsfDnvL`,
                      children: [
                        o(M, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: y(
                              (m?.y || 0) +
                                0 +
                                (((m?.height || 400) -
                                  0 -
                                  (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                12 +
                                ((Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                  12 -
                                  (Math.max(
                                    0,
                                    (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 - 12 - 228) /
                                      1
                                  ) *
                                    1 +
                                    140 +
                                    64 +
                                    24)) /
                                  2 +
                                  0 +
                                  0)
                            ),
                            pixelHeight: 1e3,
                            pixelWidth: 1e3,
                            sizes: `calc(${m?.width || `100vw`} - 24px)`,
                            ...Oe(w),
                          },
                          className: `framer-zqlp1x`,
                          layoutDependency: V,
                          layoutId: `fByCSO8sS`,
                          style: {
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                        }),
                        o(d.div, {
                          className: `framer-10ojpxd`,
                          layoutDependency: V,
                          layoutId: `jTd2SBpkl`,
                          children: o(P, {
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
                                children: `SCREW DRIVERS`,
                              }),
                            }),
                            className: `framer-1p5f5rw`,
                            fonts: [`GF;DM Sans-500`],
                            layoutDependency: V,
                            layoutId: `Bg4921M10`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...K(
                              {
                                eZDuTqKCE: {
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
                                      children: `BLOWERS`,
                                    }),
                                  }),
                                },
                                fqVd4WNKU: {
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
                                      children: `EARTH RESISTANT METERS`,
                                    }),
                                  }),
                                },
                              },
                              N,
                              L
                            ),
                          }),
                        }),
                        o(d.div, {
                          className: `framer-y4xy0n`,
                          layoutDependency: V,
                          layoutId: `b8TwmPxz6`,
                          children: o(S, {
                            links: [
                              { href: { webPageId: `f03aAHi90` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `f03aAHi90` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `f03aAHi90` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 40,
                                width: `100px`,
                                y:
                                  (m?.y || 0) +
                                  0 +
                                  (((m?.height || 400) -
                                    0 -
                                    (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 + 0)) /
                                    2 +
                                    0 +
                                    0) +
                                  12 +
                                  ((Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                    12 -
                                    (Math.max(
                                      0,
                                      (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                        12 -
                                        228) /
                                        1
                                    ) *
                                      1 +
                                      140 +
                                      64 +
                                      24)) /
                                    2 +
                                    (Math.max(
                                      0,
                                      (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                        12 -
                                        228) /
                                        1
                                    ) *
                                      1 +
                                      140) +
                                    24) +
                                  0 +
                                  0,
                                children: o(h, {
                                  className: `framer-16baeu1-container`,
                                  layoutDependency: V,
                                  layoutId: `IzUU5MWQt-container`,
                                  nodeId: `IzUU5MWQt`,
                                  rendersWithMotion: !0,
                                  scopeId: `dtlVwfwv9`,
                                  children: o(G, {
                                    height: `100%`,
                                    id: `IzUU5MWQt`,
                                    layoutId: `IzUU5MWQt`,
                                    RI5H2JEqr: e[0],
                                    style: { height: `100%`, width: `100%` },
                                    variant: `L0ZpVUzqu`,
                                    width: `100%`,
                                    ...K(
                                      {
                                        eZDuTqKCE: { RI5H2JEqr: e[1] },
                                        fqVd4WNKU: { RI5H2JEqr: e[2] },
                                      },
                                      N,
                                      L
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2jiF5.framer-1j3q2yc, .framer-2jiF5 .framer-1j3q2yc { display: block; }`,
          `.framer-2jiF5.framer-ayrusk { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 400px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2jiF5 .framer-i0tqor { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: center; overflow: visible; padding: 12px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-2jiF5 .framer-zqlp1x { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-2jiF5 .framer-10ojpxd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 24px; position: relative; width: 100%; }`,
          `.framer-2jiF5 .framer-1p5f5rw { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2jiF5 .framer-y4xy0n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 24px 24px; position: relative; width: 100%; }`,
          `.framer-2jiF5 .framer-16baeu1-container { flex: none; height: 40px; position: relative; width: 100px; }`,
          `.framer-2jiF5[data-border="true"]::after, .framer-2jiF5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-2jiF5`
      )),
      (q.displayName = `ImageGalley 8`),
      (q.defaultProps = { height: 400, width: 560 }),
      b(q, {
        variant: {
          options: [`MQ15Am0Ey`, `eZDuTqKCE`, `fqVd4WNKU`],
          optionTitles: [`Default`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: O.Enum,
        },
        cYMryRtIV: {
          __defaultAssetReference: `data:framer/asset-reference,CLtwNoBy9TbmmoXkknScOsSxpwo.webp?originalFilename=Combination+Plier+image+%28website%29.webp&width=1000&height=1000`,
          title: `Image`,
          type: O.ResponsiveImage,
        },
        RcXo4l725: { title: `Mouse Enter`, type: O.EventHandler },
      }),
      N(
        q,
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
            ],
          },
          ...Ce,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Y,
  Ke = e(() => {
    (s(),
      x(),
      m(),
      u(),
      W(),
      (Fe = g(G)),
      (Ie = [`wTD402b1H`, `ijfDHz17r`, `Bp96lr89S`]),
      (Le = `framer-FA9gJ`),
      (Re = {
        Bp96lr89S: `framer-v-1smjloa`,
        ijfDHz17r: `framer-v-mvb19h`,
        wTD402b1H: `framer-v-jykazp`,
      }),
      (ze = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (Be = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ve = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (He = d.create(r)),
      (Ue = { "Variant 2": `ijfDHz17r`, "Variant 3": `Bp96lr89S`, Default: `wTD402b1H` }),
      (We = ({ height: e, id: t, image: n, mouseEnter: r, width: i, ...a }) => ({
        ...a,
        cYMryRtIV: n ??
          a.cYMryRtIV ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000 1000w`,
          },
        RcXo4l725: r ?? a.RcXo4l725,
        variant: Ue[a.variant] ?? a.variant ?? `wTD402b1H`,
      })),
      (Ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = T(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = k(),
            m = E(),
            {
              style: g,
              className: _,
              layoutId: b,
              variant: x,
              cYMryRtIV: w,
              RcXo4l725: T,
              ...O
            } = We(e),
            {
              baseVariant: N,
              classNames: F,
              clearLoadingGesture: ee,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: te,
              setGestureState: R,
              setVariant: z,
              variants: B,
            } = D({
              cycleOrder: Ie,
              defaultVariant: `wTD402b1H`,
              ref: a,
              variant: x,
              variantClassNames: Re,
            }),
            V = Ge(e, B),
            { activeVariantCallback: H, delay: ne } = j(N),
            U = H(async (...e) => {
              if ((R({ isHovered: !0 }), T && (await T(...e)) === !1)) return !1;
            }),
            W = v(Le);
          return (
            C(),
            o(p, {
              id: b ?? s,
              children: o(He, {
                animate: B,
                initial: !1,
                children: o(Ve, {
                  value: ze,
                  children: o(d.div, {
                    ...O,
                    ...I,
                    className: v(W, `framer-jykazp`, _, F),
                    "data-border": !0,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: V,
                    layoutId: `wTD402b1H`,
                    onMouseEnter: U,
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
                    ...J(
                      {
                        Bp96lr89S: { "data-framer-name": `Variant 3` },
                        ijfDHz17r: { "data-framer-name": `Variant 2` },
                      },
                      N,
                      L
                    ),
                    children: c(d.div, {
                      className: `framer-16if0ss`,
                      layoutDependency: V,
                      layoutId: `ID8pKTGNt`,
                      children: [
                        o(M, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: y(
                              (m?.y || 0) +
                                0 +
                                (((m?.height || 400) -
                                  0 -
                                  (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                12 +
                                ((Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                  12 -
                                  (Math.max(
                                    0,
                                    (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 - 12 - 228) /
                                      1
                                  ) *
                                    1 +
                                    140 +
                                    64 +
                                    24)) /
                                  2 +
                                  0 +
                                  0)
                            ),
                            pixelHeight: 1e3,
                            pixelWidth: 1e3,
                            sizes: `calc(${m?.width || `100vw`} - 24px)`,
                            ...Be(w),
                          },
                          className: `framer-1asezva`,
                          layoutDependency: V,
                          layoutId: `fIgqAQjdB`,
                          style: {
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                        }),
                        o(d.div, {
                          className: `framer-1a4yv9y`,
                          layoutDependency: V,
                          layoutId: `S3zoNVyLR`,
                          children: o(P, {
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
                                children: `CRIMPING TOOLS`,
                              }),
                            }),
                            className: `framer-ze1gyh`,
                            fonts: [`GF;DM Sans-500`],
                            layoutDependency: V,
                            layoutId: `hjb8Q08Wp`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...J(
                              {
                                Bp96lr89S: {
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
                                      children: `IR THERMOMETER`,
                                    }),
                                  }),
                                },
                                ijfDHz17r: {
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
                                      children: `SAW MACHINES`,
                                    }),
                                  }),
                                },
                              },
                              N,
                              L
                            ),
                          }),
                        }),
                        o(d.div, {
                          className: `framer-t3f8e4`,
                          layoutDependency: V,
                          layoutId: `ahTb0lMAV`,
                          children: o(S, {
                            links: [
                              { href: { webPageId: `qxotXX72u` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `qxotXX72u` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `qxotXX72u` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 40,
                                width: `100px`,
                                y:
                                  (m?.y || 0) +
                                  0 +
                                  (((m?.height || 400) -
                                    0 -
                                    (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 + 0)) /
                                    2 +
                                    0 +
                                    0) +
                                  12 +
                                  ((Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                    12 -
                                    (Math.max(
                                      0,
                                      (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                        12 -
                                        228) /
                                        1
                                    ) *
                                      1 +
                                      140 +
                                      64 +
                                      24)) /
                                    2 +
                                    (Math.max(
                                      0,
                                      (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                        12 -
                                        228) /
                                        1
                                    ) *
                                      1 +
                                      140) +
                                    24) +
                                  0 +
                                  0,
                                children: o(h, {
                                  className: `framer-bphunp-container`,
                                  layoutDependency: V,
                                  layoutId: `iIWxfW_4f-container`,
                                  nodeId: `iIWxfW_4f`,
                                  rendersWithMotion: !0,
                                  scopeId: `JoWfGMmHA`,
                                  children: o(G, {
                                    height: `100%`,
                                    id: `iIWxfW_4f`,
                                    layoutId: `iIWxfW_4f`,
                                    RI5H2JEqr: e[0],
                                    style: { height: `100%`, width: `100%` },
                                    variant: `L0ZpVUzqu`,
                                    width: `100%`,
                                    ...J(
                                      {
                                        Bp96lr89S: { RI5H2JEqr: e[2] },
                                        ijfDHz17r: { RI5H2JEqr: e[1] },
                                      },
                                      N,
                                      L
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-FA9gJ.framer-1lo8wf8, .framer-FA9gJ .framer-1lo8wf8 { display: block; }`,
          `.framer-FA9gJ.framer-jykazp { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 400px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-FA9gJ .framer-16if0ss { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: center; overflow: visible; padding: 12px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-FA9gJ .framer-1asezva { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-FA9gJ .framer-1a4yv9y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 24px; position: relative; width: 100%; }`,
          `.framer-FA9gJ .framer-ze1gyh { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FA9gJ .framer-t3f8e4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 24px 24px; position: relative; width: 100%; }`,
          `.framer-FA9gJ .framer-bphunp-container { flex: none; height: 40px; position: relative; width: 100px; }`,
          `.framer-FA9gJ[data-border="true"]::after, .framer-FA9gJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-FA9gJ`
      )),
      (Y.displayName = `ImageGalley 9`),
      (Y.defaultProps = { height: 400, width: 560 }),
      b(Y, {
        variant: {
          options: [`wTD402b1H`, `ijfDHz17r`, `Bp96lr89S`],
          optionTitles: [`Default`, `Variant 2`, `Variant 3`],
          title: `Variant`,
          type: O.Enum,
        },
        cYMryRtIV: {
          __defaultAssetReference: `data:framer/asset-reference,CLtwNoBy9TbmmoXkknScOsSxpwo.webp?originalFilename=Combination+Plier+image+%28website%29.webp&width=1000&height=1000`,
          title: `Image`,
          type: O.ResponsiveImage,
        },
        RcXo4l725: { title: `Mouse Enter`, type: O.EventHandler },
      }),
      N(
        Y,
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
            ],
          },
          ...Fe,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  X,
  nt = e(() => {
    (s(),
      x(),
      m(),
      u(),
      W(),
      (qe = g(G)),
      (Je = `framer-2PFEC`),
      (Ye = { lA4FUTltA: `framer-v-1fr6mll` }),
      (Xe = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (Ze = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Qe = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      ($e = d.create(r)),
      (et = ({
        height: e,
        id: t,
        image: n,
        internalCard2: r,
        mouseEnter: i,
        title2: a,
        width: o,
        ...s
      }) => ({
        ...s,
        Cj0zf9d81: a ?? s.Cj0zf9d81 ?? `OTHERS`,
        cYMryRtIV: n ??
          s.cYMryRtIV ?? {
            pixelHeight: 1e3,
            pixelWidth: 1e3,
            src: `https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000`,
            srcSet: `https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?scale-down-to=512&width=1000&height=1000 512w,https://framerusercontent.com/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000 1000w`,
          },
        R87kHUOMK: r ?? s.R87kHUOMK,
        RcXo4l725: i ?? s.RcXo4l725,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = T(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = k(),
            m = E(),
            {
              style: g,
              className: _,
              layoutId: b,
              variant: x,
              cYMryRtIV: S,
              RcXo4l725: C,
              Cj0zf9d81: w,
              R87kHUOMK: T,
              ...O
            } = et(e),
            {
              baseVariant: N,
              classNames: F,
              clearLoadingGesture: ee,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: te,
              setGestureState: R,
              setVariant: z,
              variants: B,
            } = D({ defaultVariant: `lA4FUTltA`, ref: a, variant: x, variantClassNames: Ye }),
            V = tt(e, B),
            { activeVariantCallback: H, delay: ne } = j(N),
            U = H(async (...e) => {
              if ((R({ isHovered: !0 }), C && (await C(...e)) === !1)) return !1;
            }),
            W = v(Je);
          return o(p, {
            id: b ?? s,
            children: o($e, {
              animate: B,
              initial: !1,
              children: o(Qe, {
                value: Xe,
                children: c(d.div, {
                  ...O,
                  ...I,
                  className: v(W, `framer-1fr6mll`, _, F),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: V,
                  layoutId: `lA4FUTltA`,
                  onMouseEnter: U,
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
                  children: [
                    o(d.div, {
                      className: `framer-huoyur`,
                      layoutDependency: V,
                      layoutId: `IGOttbxdA`,
                      children: o(M, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: y(
                            (m?.y || 0) +
                              0 +
                              (((m?.height || 400) -
                                0 -
                                (Math.max(0, ((m?.height || 400) - 0 - 236) / 1) * 1 +
                                  140 +
                                  64 +
                                  32)) /
                                2 +
                                0 +
                                0) +
                              12 +
                              ((Math.max(0, ((m?.height || 400) - 0 - 236) / 1) * 1 -
                                12 -
                                (Math.max(
                                  0,
                                  (Math.max(0, ((m?.height || 400) - 0 - 236) / 1) * 1 - 12 - 0) / 1
                                ) *
                                  1 +
                                  0)) /
                                2 +
                                0 +
                                0)
                          ),
                          pixelHeight: 1e3,
                          pixelWidth: 1e3,
                          sizes: `calc(${m?.width || `100vw`} - 24px)`,
                          ...Ze(S),
                        },
                        className: `framer-1qyeunm`,
                        layoutDependency: V,
                        layoutId: `m6gwG3jkC`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                      }),
                    }),
                    o(d.div, {
                      className: `framer-37pc5q`,
                      layoutDependency: V,
                      layoutId: `ofpKebGas`,
                      children: o(P, {
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
                            children: `OTHERS`,
                          }),
                        }),
                        className: `framer-hi93il`,
                        fonts: [`GF;DM Sans-500`],
                        layoutDependency: V,
                        layoutId: `VnXWTn_oQ`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: w,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    o(d.div, {
                      className: `framer-12ztwhx`,
                      layoutDependency: V,
                      layoutId: `aYTlytwoA`,
                      children: o(A, {
                        height: 40,
                        width: `100px`,
                        y:
                          (m?.y || 0) +
                          0 +
                          (((m?.height || 400) -
                            0 -
                            (Math.max(0, ((m?.height || 400) - 0 - 236) / 1) * 1 + 140 + 64 + 32)) /
                            2 +
                            (Math.max(0, ((m?.height || 400) - 0 - 236) / 1) * 1 + 140) +
                            32) +
                          0 +
                          0,
                        children: o(h, {
                          className: `framer-5wi6kv-container`,
                          layoutDependency: V,
                          layoutId: `L6GLnOqcT-container`,
                          nodeId: `L6GLnOqcT`,
                          rendersWithMotion: !0,
                          scopeId: `Njihmh_MW`,
                          children: o(G, {
                            height: `100%`,
                            id: `L6GLnOqcT`,
                            layoutId: `L6GLnOqcT`,
                            RI5H2JEqr: T,
                            style: { height: `100%`, width: `100%` },
                            variant: `L0ZpVUzqu`,
                            width: `100%`,
                          }),
                        }),
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
          `.framer-2PFEC.framer-gavfkp, .framer-2PFEC .framer-gavfkp { display: block; }`,
          `.framer-2PFEC.framer-1fr6mll { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 400px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2PFEC .framer-huoyur { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: center; overflow: visible; padding: 12px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-2PFEC .framer-1qyeunm { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-2PFEC .framer-37pc5q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 24px; position: relative; width: 100%; }`,
          `.framer-2PFEC .framer-hi93il { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2PFEC .framer-12ztwhx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 24px 24px; position: relative; width: 100%; }`,
          `.framer-2PFEC .framer-5wi6kv-container { flex: none; height: 40px; position: relative; width: 100px; }`,
          `.framer-2PFEC[data-border="true"]::after, .framer-2PFEC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-2PFEC`
      )),
      (X.displayName = `ImageGalley 10`),
      (X.defaultProps = { height: 400, width: 560 }),
      b(X, {
        cYMryRtIV: {
          __defaultAssetReference: `data:framer/asset-reference,CLtwNoBy9TbmmoXkknScOsSxpwo.webp?originalFilename=Combination+Plier+image+%28website%29.webp&width=1000&height=1000`,
          title: `Image`,
          type: O.ResponsiveImage,
        },
        RcXo4l725: { title: `Mouse Enter`, type: O.EventHandler },
        Cj0zf9d81: {
          defaultValue: `OTHERS`,
          displayTextArea: !1,
          title: `Title 2`,
          type: O.String,
        },
        R87kHUOMK: { title: `Internal Card 2`, type: O.Link },
      }),
      N(
        X,
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
            ],
          },
          ...qe,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  rt,
  Z,
  it,
  at = e(() => {
    (x(),
      w.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (rt = [
        {
          explicitInter: !0,
          fonts: [
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
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Z = [
        `.framer-OgqsF .framer-styles-preset-12c635e:not(.rich-text-wrapper), .framer-OgqsF .framer-styles-preset-12c635e.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-OgqsF .framer-styles-preset-12c635e:not(.rich-text-wrapper), .framer-OgqsF .framer-styles-preset-12c635e.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-OgqsF .framer-styles-preset-12c635e:not(.rich-text-wrapper), .framer-OgqsF .framer-styles-preset-12c635e.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #666666; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (it = `framer-OgqsF`));
  }),
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  Q,
  $,
  mt = e(() => {
    (s(),
      x(),
      m(),
      u(),
      V(),
      ae(),
      F(),
      le(),
      ce(),
      te(),
      at(),
      oe(),
      de(),
      W(),
      (ot = g(G)),
      (st = `framer-UJZvL`),
      (ct = { kHZPmK6tN: `framer-v-fiib1e` }),
      (lt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ut = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (dt = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (ft = d.create(r)),
      (pt = ({ height: e, id: t, image2: n, text: i, title2: a, width: s, ...c }) => ({
        ...c,
        jDxkKoQ2E:
          i ??
          c.jDxkKoQ2E ??
          o(r, {
            children: o(d.p, {
              children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
            }),
          }),
        xTZBddCAm: a ?? c.xTZBddCAm ?? `SPANNERS`,
        zeW557IRD: n ??
          c.zeW557IRD ?? {
            alt: ``,
            pixelHeight: 965,
            pixelWidth: 1772,
            src: `https://framerusercontent.com/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=512&width=1772&height=965`,
            srcSet: `https://framerusercontent.com/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=512&width=1772&height=965 512w,https://framerusercontent.com/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=1024&width=1772&height=965 1024w,https://framerusercontent.com/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?width=1772&height=965 1772w`,
          },
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = T(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = k(),
            m = E(),
            {
              style: g,
              className: _,
              layoutId: b,
              variant: x,
              zeW557IRD: S,
              xTZBddCAm: C,
              jDxkKoQ2E: w,
              ...T
            } = pt(e),
            {
              baseVariant: O,
              classNames: j,
              clearLoadingGesture: N,
              gestureHandlers: F,
              gestureVariant: ee,
              isLoading: I,
              setGestureState: te,
              setVariant: R,
              variants: z,
            } = D({ defaultVariant: `kHZPmK6tN`, ref: a, variant: x, variantClassNames: ct }),
            V = Q(e, z),
            H = v(st, re, fe, L, U, ge, ye, it, B, ie);
          return o(p, {
            id: b ?? s,
            children: o(ft, {
              animate: z,
              initial: !1,
              children: o(dt, {
                value: lt,
                children: c(d.div, {
                  ...T,
                  ...F,
                  className: v(H, `framer-fiib1e`, _, j),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: V,
                  layoutId: `kHZPmK6tN`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(122, 122, 122, 0.25)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...g,
                  },
                  children: [
                    o(M, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: y((m?.y || 0) + 0 + 0),
                        pixelHeight: 965,
                        pixelWidth: 1772,
                        sizes: m?.width || `100vw`,
                        ...ut(S),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-1qfin2f`,
                      "data-framer-name": `Image`,
                      layoutDependency: V,
                      layoutId: `G8zYG9jqY`,
                    }),
                    c(d.div, {
                      className: `framer-15js9iw`,
                      "data-framer-name": `title + sub`,
                      layoutDependency: V,
                      layoutId: `M3Q_FAtGJ`,
                      children: [
                        o(P, {
                          __fromCanvasComponent: !0,
                          children: o(r, {
                            children: o(d.p, {
                              style: {
                                "--font-selector": `RlM7TWFucm9wZS1ib2xk`,
                                "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                "--framer-font-size": `24px`,
                                "--framer-font-weight": `700`,
                                "--framer-letter-spacing": `-0.01em`,
                                "--framer-line-height": `1.5em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(66, 57, 57))`,
                              },
                              children: `SPANNERS`,
                            }),
                          }),
                          className: `framer-1fn0k4g`,
                          fonts: [`FS;Manrope-bold`],
                          layoutDependency: V,
                          layoutId: `kOy8Ldv8Z`,
                          style: {
                            "--extracted-r6o4lv": `rgb(66, 57, 57)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: C,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(P, {
                          __fromCanvasComponent: !0,
                          children: w,
                          className: `framer-1aohzpn`,
                          fonts: [`Inter`],
                          layoutDependency: V,
                          layoutId: `Ck9r214eV`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          stylesPresetsClassNames: {
                            a: `framer-styles-preset-qywj9v`,
                            code: `framer-styles-preset-1k7jbaj`,
                            h1: `framer-styles-preset-1wpx8mi`,
                            h2: `framer-styles-preset-tea1bq`,
                            h3: `framer-styles-preset-b5tsjq`,
                            h4: `framer-styles-preset-k1feaj`,
                            h5: `framer-styles-preset-1pz7lfh`,
                            h6: `framer-styles-preset-1i7jp4q`,
                            p: `framer-styles-preset-12c635e`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(A, {
                          height: 40,
                          width: `100px`,
                          y: (m?.y || 0) + 0 + 230 + 24 + 296,
                          children: o(h, {
                            className: `framer-1o1e3k3-container`,
                            layoutDependency: V,
                            layoutId: `S0lU7zZr_-container`,
                            nodeId: `S0lU7zZr_`,
                            rendersWithMotion: !0,
                            scopeId: `q2YiQ1HWO`,
                            children: o(G, {
                              height: `100%`,
                              id: `S0lU7zZr_`,
                              layoutId: `S0lU7zZr_`,
                              style: { height: `100%`, width: `100%` },
                              variant: `L0ZpVUzqu`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-UJZvL.framer-1xjs2f6, .framer-UJZvL .framer-1xjs2f6 { display: block; }`,
          `.framer-UJZvL.framer-fiib1e { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 360px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-UJZvL .framer-1qfin2f { aspect-ratio: 1.5391304347826087 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 234px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-UJZvL .framer-15js9iw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 100%; }`,
          `.framer-UJZvL .framer-1fn0k4g, .framer-UJZvL .framer-1aohzpn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-UJZvL .framer-1o1e3k3-container { flex: none; height: 40px; position: relative; width: 100px; }`,
          ...xe,
          ...be,
          ...ee,
          ...H,
          ...pe,
          ...me,
          ...Z,
          ...R,
          ...he,
          `.framer-UJZvL[data-border="true"]::after, .framer-UJZvL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-UJZvL`
      )),
      ($.displayName = `Card 3`),
      ($.defaultProps = { height: 480, width: 360 }),
      b($, {
        zeW557IRD: {
          __defaultAssetReference: `data:framer/asset-reference,85w2j8h86titir9kHX4sKQIJJ4Q.png?originalFilename=double-end-spanner+set+image+%28website%29.png&preferredSize=auto&width=1772&height=965`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,85w2j8h86titir9kHX4sKQIJJ4Q.png?originalFilename=double-end-spanner+set+image+%28website%29.png&preferredSize=auto&width=1772&height=965`,
          },
          title: `Image 2`,
          type: O.ResponsiveImage,
        },
        xTZBddCAm: {
          defaultValue: `SPANNERS`,
          displayTextArea: !1,
          title: `Title 2`,
          type: O.String,
        },
        jDxkKoQ2E: {
          defaultValue: `<p>AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.</p>`,
          title: `Text`,
          type: O.RichText,
        },
      }),
      N(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `https://framerusercontent.com/third-party-assets/fontshare/wf/NGBUP45ES3F7RD5XGKPEDJ6QEPO4TMOK/EXDVWJ2EDDVVV65UENMX33EDDYBX6OF7/6P4FPMFQH7CCC7RZ4UU4NKSGJ2RLF7V5.woff2`,
                weight: `700`,
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
          ...ot,
          ..._(Se),
          ..._(se),
          ..._(I),
          ..._(ne),
          ..._(ue),
          ..._(_e),
          ..._(rt),
          ..._(z),
          ..._(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Y as a, Pe as c, nt as i, mt as n, Ke as o, X as r, q as s, $ as t };
//# sourceMappingURL=q2YiQ1HWO.pIGuwFIU.mjs.map
