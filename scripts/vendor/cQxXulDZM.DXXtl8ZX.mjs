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
  L = e(() => {
    (s(),
      g(),
      p(),
      l(),
      (D = [`z6oSgdJxk`, `pYI8ltHqm`, `o3vVkzHzj`]),
      (O = `framer-TDkmt`),
      (k = {
        o3vVkzHzj: `framer-v-afnamg`,
        pYI8ltHqm: `framer-v-1ygxwct`,
        z6oSgdJxk: `framer-v-1y8kcyx`,
      }),
      (A = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (j = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (M = u.create(r)),
      (N = { "Variant 3": `o3vVkzHzj`, Strong: `z6oSgdJxk`, Weak: `pYI8ltHqm` }),
      (P = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        ggTbrSuHk: n ?? i.ggTbrSuHk ?? `Products`,
        variant: N[i.variant] ?? i.variant ?? `z6oSgdJxk`,
      })),
      (F = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (I = _(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = c(),
            { activeLocale: l, setLocale: d } = S();
          v();
          let { style: p, className: h, layoutId: g, variant: _, ggTbrSuHk: y, ...x } = P(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: N,
              gestureHandlers: I,
              gestureVariant: L,
              isLoading: R,
              setGestureState: z,
              setVariant: B,
              variants: V,
            } = b({
              cycleOrder: D,
              defaultVariant: `z6oSgdJxk`,
              ref: a,
              variant: _,
              variantClassNames: k,
            }),
            H = F(e, V),
            U = m(O);
          return o(f, {
            id: g ?? s,
            children: o(M, {
              animate: V,
              initial: !1,
              children: o(j, {
                value: A,
                children: o(u.div, {
                  ...x,
                  ...I,
                  className: m(U, `framer-1y8kcyx`, h, w),
                  "data-border": !0,
                  "data-framer-name": `Strong`,
                  layoutDependency: H,
                  layoutId: `z6oSgdJxk`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-224be5af-da22-4ecb-a81a-2c9076ed0716, rgba(95, 95, 113, 0.2))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...p,
                  },
                  variants: {
                    pYI8ltHqm: {
                      "--border-color": `var(--token-5f5e41aa-15b3-439f-89f1-3f142f1cf995, rgb(250, 250, 250))`,
                    },
                  },
                  ...E(
                    {
                      o3vVkzHzj: { "data-framer-name": `Variant 3` },
                      pYI8ltHqm: { "data-framer-name": `Weak` },
                    },
                    C,
                    L
                  ),
                  children: o(T, {
                    __fromCanvasComponent: !0,
                    children: o(r, {
                      children: o(u.p, {
                        style: {
                          "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                          "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                          "--framer-font-size": `12px`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-5d3602f5-d470-4b4b-916d-5b57bbf588f8, rgba(255, 255, 255, 0.8)))`,
                        },
                        children: `Placeholder`,
                      }),
                    }),
                    className: `framer-nuvgfz`,
                    "data-framer-name": `Text`,
                    fonts: [`GF;DM Sans-regular`],
                    layoutDependency: H,
                    layoutId: `OSSRsB7_m`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-5d3602f5-d470-4b4b-916d-5b57bbf588f8, rgba(255, 255, 255, 0.8))`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: y,
                    variants: {
                      pYI8ltHqm: {
                        "--extracted-r6o4lv": `var(--token-34d58044-5fb0-4480-9bc8-4e91d499d8e6, rgb(255, 255, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...E(
                      {
                        pYI8ltHqm: {
                          children: o(r, {
                            children: o(u.p, {
                              style: {
                                "--font-selector": `R0Y7RE0gU2Fucy1yZWd1bGFy`,
                                "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                "--framer-font-size": `12px`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-34d58044-5fb0-4480-9bc8-4e91d499d8e6, rgb(255, 255, 255)))`,
                              },
                              children: `Placeholder`,
                            }),
                          }),
                        },
                      },
                      C,
                      L
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-TDkmt.framer-7bssim, .framer-TDkmt .framer-7bssim { display: block; }`,
          `.framer-TDkmt.framer-1y8kcyx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 6px 10px 6px 10px; position: relative; width: min-content; }`,
          `.framer-TDkmt .framer-nuvgfz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-TDkmt[data-border="true"]::after, .framer-TDkmt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-TDkmt`
      )),
      (I.displayName = `Badge 2`),
      (I.defaultProps = { height: 26, width: 70 }),
      h(I, {
        variant: {
          options: [`z6oSgdJxk`, `pYI8ltHqm`, `o3vVkzHzj`],
          optionTitles: [`Strong`, `Weak`, `Variant 3`],
          title: `Variant`,
          type: x.Enum,
        },
        ggTbrSuHk: { defaultValue: `Products`, displayTextArea: !1, title: `Text`, type: x.String },
      }),
      w(
        I,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z = e(() => {
    (s(),
      g(),
      p(),
      l(),
      (z = {
        AjA4ihSQw: { hover: !0 },
        giO5RoW5L: { hover: !0 },
        L0ZpVUzqu: { hover: !0, pressed: !0 },
      }),
      (B = [`L0ZpVUzqu`, `AjA4ihSQw`, `qk_cgNADs`, `giO5RoW5L`]),
      (V = `framer-ZQ8u4`),
      (H = {
        AjA4ihSQw: `framer-v-1abvfip`,
        giO5RoW5L: `framer-v-d0mkmg`,
        L0ZpVUzqu: `framer-v-2fqhkl`,
        qk_cgNADs: `framer-v-2d6wmh`,
      }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = (e, t) => `translate(-50%, -50%) ${t}`),
      (G = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (K = u.create(r)),
      (q = {
        "enquiry button others ": `giO5RoW5L`,
        "enquiry button pliers": `AjA4ihSQw`,
        "Read more button": `qk_cgNADs`,
        "View more button": `L0ZpVUzqu`,
      }),
      (J = ({ click: e, height: t, hover: n, id: r, internalCard: i, width: a, ...o }) => ({
        ...o,
        RI5H2JEqr: i ?? o.RI5H2JEqr,
        U6r3ZEwhg: n ?? o.U6r3ZEwhg,
        variant: q[o.variant] ?? o.variant ?? `L0ZpVUzqu`,
        yR4lJi3FT: e ?? o.yR4lJi3FT,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = _(
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
              yR4lJi3FT: x,
              RI5H2JEqr: w,
              U6r3ZEwhg: E,
              ...D
            } = J(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = b({
              cycleOrder: B,
              defaultVariant: `L0ZpVUzqu`,
              enabledGestures: z,
              ref: a,
              variant: _,
              variantClassNames: H,
            }),
            L = Y(e, I),
            { activeVariantCallback: q, delay: X } = C(O),
            Z = q(async (...e) => {
              if ((P({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
            }),
            Q = q(async (...e) => {
              if ((P({ isHovered: !0 }), E && (await E(...e)) === !1)) return !1;
            }),
            $ = m(V);
          return o(f, {
            id: g ?? s,
            children: o(K, {
              animate: I,
              initial: !1,
              children: o(G, {
                value: U,
                children: o(y, {
                  href: w,
                  motionChild: !0,
                  nodeId: `L0ZpVUzqu`,
                  openInNewTab: !1,
                  scopeId: `cQxXulDZM`,
                  ...R({ giO5RoW5L: { href: { webPageId: `MVBVpVcIA` } } }, O, M),
                  children: o(u.a, {
                    ...D,
                    ...j,
                    className: `${m($, `framer-2fqhkl`, h, k)} framer-vcp7pv`,
                    "data-framer-name": `View more button`,
                    "data-highlight": !0,
                    layoutDependency: L,
                    layoutId: `L0ZpVUzqu`,
                    onMouseEnter: Q,
                    onTap: Z,
                    ref: a,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                      ...p,
                    },
                    variants: {
                      "AjA4ihSQw-hover": { backgroundColor: `rgba(255, 255, 255, 0)` },
                      "L0ZpVUzqu-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-6b892b32-1411-42da-aa0a-0ae8bca242e9, rgb(6, 6, 57))`,
                      },
                      "L0ZpVUzqu-pressed": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(45, 53, 138, 0.58)`,
                      },
                      AjA4ihSQw: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      giO5RoW5L: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      qk_cgNADs: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-895eabad-bfb4-4de9-b5ba-0d3bb64b2c0c, rgb(255, 255, 255))`,
                      },
                    },
                    ...R(
                      {
                        "AjA4ihSQw-hover": { "data-framer-name": void 0 },
                        "giO5RoW5L-hover": { "data-framer-name": void 0 },
                        "L0ZpVUzqu-hover": { "data-framer-name": void 0 },
                        "L0ZpVUzqu-pressed": { "data-framer-name": void 0 },
                        AjA4ihSQw: {
                          "data-border": !0,
                          "data-framer-name": `enquiry button pliers`,
                        },
                        giO5RoW5L: {
                          "data-border": !0,
                          "data-framer-name": `enquiry button others `,
                        },
                        qk_cgNADs: { "data-border": !0, "data-framer-name": `Read more button` },
                      },
                      O,
                      M
                    ),
                    children: o(T, {
                      __fromCanvasComponent: !0,
                      children: o(r, {
                        children: o(u.p, {
                          style: {
                            "--framer-font-size": `14px`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                          },
                          children: `View more`,
                        }),
                      }),
                      className: `framer-3d0ihx`,
                      fonts: [`Inter`],
                      layoutDependency: L,
                      layoutId: `acmYEYiZ3`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      transformTemplate: W,
                      variants: {
                        "AjA4ihSQw-hover": { "--extracted-r6o4lv": `rgb(157, 160, 194)` },
                        "giO5RoW5L-hover": { "--extracted-r6o4lv": `rgb(157, 160, 194)` },
                        AjA4ihSQw: {
                          "--extracted-r6o4lv": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                        },
                        giO5RoW5L: {
                          "--extracted-r6o4lv": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                        },
                        qk_cgNADs: {
                          "--extracted-r6o4lv": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...R(
                        {
                          "AjA4ihSQw-hover": {
                            children: o(r, {
                              children: o(u.p, {
                                style: {
                                  "--framer-font-size": `14px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(157, 160, 194))`,
                                },
                                children: `Enquiry`,
                              }),
                            }),
                          },
                          "giO5RoW5L-hover": {
                            children: o(r, {
                              children: o(u.p, {
                                style: {
                                  "--framer-font-size": `14px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(157, 160, 194))`,
                                },
                                children: `Enquiry`,
                              }),
                            }),
                          },
                          AjA4ihSQw: {
                            children: o(r, {
                              children: o(u.p, {
                                style: {
                                  "--framer-font-size": `14px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138)))`,
                                },
                                children: `Enquiry`,
                              }),
                            }),
                          },
                          giO5RoW5L: {
                            children: o(r, {
                              children: o(u.p, {
                                style: {
                                  "--framer-font-size": `14px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138)))`,
                                },
                                children: `Enquiry`,
                              }),
                            }),
                          },
                          qk_cgNADs: {
                            children: o(r, {
                              children: o(u.p, {
                                style: {
                                  "--framer-font-size": `14px`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138)))`,
                                },
                                children: `Read more`,
                              }),
                            }),
                          },
                        },
                        O,
                        M
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
          `.framer-ZQ8u4.framer-vcp7pv, .framer-ZQ8u4 .framer-vcp7pv { display: block; }`,
          `.framer-ZQ8u4.framer-2fqhkl { cursor: pointer; height: 40px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 100px; }`,
          `.framer-ZQ8u4 .framer-3d0ihx { flex: none; height: auto; left: 49%; position: absolute; top: 48%; white-space: pre; width: auto; }`,
          `.framer-ZQ8u4.framer-v-1abvfip .framer-3d0ihx, .framer-ZQ8u4.framer-v-2d6wmh .framer-3d0ihx, .framer-ZQ8u4.framer-v-d0mkmg .framer-3d0ihx { left: 50%; top: 50%; }`,
          `.framer-ZQ8u4[data-border="true"]::after, .framer-ZQ8u4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-ZQ8u4`
      )),
      (X.displayName = `Product buttons final`),
      (X.defaultProps = { height: 40, width: 100 }),
      h(X, {
        variant: {
          options: [`L0ZpVUzqu`, `AjA4ihSQw`, `qk_cgNADs`, `giO5RoW5L`],
          optionTitles: [
            `View more button`,
            `enquiry button pliers`,
            `Read more button`,
            `enquiry button others `,
          ],
          title: `Variant`,
          type: x.Enum,
        },
        yR4lJi3FT: { title: `Click`, type: x.EventHandler },
        RI5H2JEqr: { title: `Internal card`, type: x.Link },
        U6r3ZEwhg: { title: `Hover`, type: x.EventHandler },
      }),
      w(
        X,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { L as i, Z as n, I as r, X as t };
//# sourceMappingURL=cQxXulDZM.DXXtl8ZX.mjs.map
