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
  A as h,
  C as g,
  I as _,
  L as ee,
  O as v,
  R as y,
  T as b,
  U as x,
  at as te,
  b as S,
  c as C,
  ct as ne,
  dt as re,
  g as w,
  ht as T,
  it as ie,
  mt as E,
  n as D,
  nt as ae,
  ot as oe,
  p as O,
  pt as se,
  r as k,
  st as ce,
  t as A,
  tt as le,
  u as j,
  ut as M,
  w as N,
  x as P,
} from "./framer.w0XhpZTx.mjs";
import { n as ue, t as de } from "./Ticker.QfylVvbQ.mjs";
import { i as fe, n as pe, r as F, t as me } from "./nl385Jssa.BV16yEHR.mjs";
import { c as he, s as ge } from "./shared.DPOhhryJ.mjs";
import { i as _e, n as ve, r as I, t as ye } from "./cQxXulDZM.DXXtl8ZX.mjs";
import {
  a as be,
  c as L,
  i as xe,
  n as Se,
  o as Ce,
  r as we,
  s as Te,
  t as R,
} from "./q2YiQ1HWO.pIGuwFIU.mjs";
import { n as z, t as B } from "./szrJOgEFA.Cstbr50J.mjs";
import Ee, { t as V } from "./swQ1JOYdUor8OGCC8IvNwtOdv0I9-UpXT2eQhVdbe8o.CrfLZ35q.mjs";
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var De,
  Oe,
  ke,
  U,
  Ae,
  je,
  W,
  Me,
  Ne,
  Pe,
  Fe,
  G,
  Ie = e(() => {
    (s(),
      x(),
      m(),
      u(),
      ve(),
      (De = _(ye)),
      (Oe = [`fsoy5qkvU`, `HUkYHii8o`, `icF1RIDkS`, `FiOI2gYGn`, `OHmVzOUED`]),
      (ke = `framer-gyvEr`),
      (U = {
        FiOI2gYGn: `framer-v-1v8gmzk`,
        fsoy5qkvU: `framer-v-goz4ju`,
        HUkYHii8o: `framer-v-10cjeay`,
        icF1RIDkS: `framer-v-5d5xcp`,
        OHmVzOUED: `framer-v-5dz62`,
      }),
      (Ae = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (je = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (Me = d.create(r)),
      (Ne = {
        "Others product3": `OHmVzOUED`,
        "Variant 2": `HUkYHii8o`,
        "Variant 3": `icF1RIDkS`,
        "Variant 4": `FiOI2gYGn`,
        Default: `fsoy5qkvU`,
      }),
      (Pe = ({
        height: e,
        id: t,
        image2: n,
        image3: r,
        internalCard: i,
        mouseEnter: a,
        title2: o,
        width: s,
        ...c
      }) => ({
        ...c,
        gWbxwWnwP: o ?? c.gWbxwWnwP ?? `MEASURING METERS`,
        j8NbB0fcK: r ?? c.j8NbB0fcK,
        RcXo4l725: a ?? c.RcXo4l725,
        variant: Ne[c.variant] ?? c.variant ?? `fsoy5qkvU`,
        wx_mw4Gff: n ??
          c.wx_mw4Gff ?? {
            alt: ``,
            pixelHeight: 4e3,
            pixelWidth: 6016,
            src: `../../assets/images/znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?scale-down-to=1024&width=6016&height=4000`,
            srcSet: `../../assets/images/znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg 512w,../../assets/images/znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?scale-down-to=1024&width=6016&height=4000 1024w,../../assets/images/znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?scale-down-to=2048&width=6016&height=4000 2048w,../../assets/images/znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?scale-down-to=4096&width=6016&height=4000 4096w,../../assets/images/znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?width=6016&height=4000 6016w`,
          },
        xy7JW5bva: i ?? c.xy7JW5bva,
      })),
      (Fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = E(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = ce(),
            m = ae(),
            {
              style: h,
              className: _,
              layoutId: ee,
              variant: b,
              RcXo4l725: x,
              xy7JW5bva: te,
              wx_mw4Gff: S,
              gWbxwWnwP: C,
              j8NbB0fcK: ne,
              ...re
            } = Pe(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: ie,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: oe,
              setGestureState: O,
              setVariant: k,
              variants: M,
            } = se({
              cycleOrder: Oe,
              defaultVariant: `fsoy5qkvU`,
              ref: a,
              variant: b,
              variantClassNames: U,
            }),
            N = Fe(e, M),
            { activeVariantCallback: ue, delay: de } = le(w),
            fe = ue(async (...e) => {
              if ((O({ isHovered: !0 }), x && (await x(...e)) === !1)) return !1;
            }),
            pe = v(ke),
            F = () => w === `OHmVzOUED`,
            me = () => w !== `OHmVzOUED`;
          return o(p, {
            id: ee ?? s,
            children: o(Me, {
              animate: M,
              initial: !1,
              children: o(W, {
                value: Ae,
                children: o(d.div, {
                  ...re,
                  ...E,
                  className: v(pe, `framer-goz4ju`, _, T),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: N,
                  layoutId: `fsoy5qkvU`,
                  onMouseEnter: fe,
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
                    ...h,
                  },
                  ...H(
                    {
                      FiOI2gYGn: { "data-framer-name": `Variant 4` },
                      HUkYHii8o: { "data-framer-name": `Variant 2` },
                      icF1RIDkS: { "data-framer-name": `Variant 3` },
                      OHmVzOUED: { "data-framer-name": `Others product3` },
                    },
                    w,
                    D
                  ),
                  children: c(d.div, {
                    className: `framer-1vl0xh8`,
                    layoutDependency: N,
                    layoutId: `MRe9tCYf1`,
                    children: [
                      F() &&
                        o(d.div, {
                          className: `framer-91yfuz`,
                          layoutDependency: N,
                          layoutId: `Houv34gOL`,
                          children: o(j, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              pixelHeight: 290,
                              pixelWidth: 290,
                              src: `https://framerusercontent.com/images/M3hlRIx8uSY1QLWJsP3pwSksKyg.jpg?width=290&height=290`,
                            },
                            className: `framer-pjo47a`,
                            fitImageDimension: `width`,
                            layoutDependency: N,
                            layoutId: `rlncAKTfP`,
                            ...H(
                              {
                                OHmVzOUED: {
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
                                            (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                              12 -
                                              295) /
                                              1
                                          ) *
                                            1 +
                                            210 +
                                            85 +
                                            0)) /
                                          2 +
                                          0 +
                                          0) +
                                        12 +
                                        ((Math.max(
                                          0,
                                          (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                            12 -
                                            295) /
                                            1
                                        ) *
                                          1 -
                                          12 -
                                          (Math.max(
                                            0,
                                            (Math.max(
                                              0,
                                              (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                                12 -
                                                295) /
                                                1
                                            ) *
                                              1 -
                                              12 -
                                              0) /
                                              1
                                          ) *
                                            1 +
                                            0)) /
                                          2 +
                                          0 +
                                          0)
                                    ),
                                    pixelHeight: 290,
                                    pixelWidth: 290,
                                    sizes:
                                      Math.max(
                                        0,
                                        (Math.max(
                                          0,
                                          (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                            12 -
                                            295) /
                                            1
                                        ) *
                                          1 -
                                          12 -
                                          0) /
                                          1
                                      ) * 1,
                                    src: `https://framerusercontent.com/images/M3hlRIx8uSY1QLWJsP3pwSksKyg.jpg?width=290&height=290`,
                                  },
                                },
                              },
                              w,
                              D
                            ),
                          }),
                        }),
                      me() &&
                        o(j, {
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
                                    (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 - 12 - 229) /
                                      1
                                  ) *
                                    1 +
                                    140 +
                                    65 +
                                    24)) /
                                  2 +
                                  0 +
                                  0)
                            ),
                            pixelHeight: 4e3,
                            pixelWidth: 6016,
                            sizes: `calc(${m?.width || `100vw`} - 24px)`,
                            ...je(S),
                          },
                          className: `framer-1u0rmdc`,
                          layoutDependency: N,
                          layoutId: `WO9o79Alq`,
                          style: {
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          ...H(
                            {
                              icF1RIDkS: {
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
                                          (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                            12 -
                                            229) /
                                            1
                                        ) *
                                          1 +
                                          140 +
                                          65 +
                                          24)) /
                                        2 +
                                        0 +
                                        0)
                                  ),
                                  sizes: `calc(${m?.width || `100vw`} - 24px)`,
                                  ...je(ne),
                                },
                              },
                            },
                            w,
                            D
                          ),
                        }),
                      o(d.div, {
                        className: `framer-1qlgc46`,
                        layoutDependency: N,
                        layoutId: `ga__FdiqC`,
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
                              children: `SOCKET SETS & ADAPTORS`,
                            }),
                          }),
                          className: `framer-1usf6bx`,
                          fonts: [`GF;DM Sans-500`],
                          layoutDependency: N,
                          layoutId: `SP1UPRr75`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          variants: {
                            OHmVzOUED: {
                              "--extracted-2gxw0f": `var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...H(
                            {
                              HUkYHii8o: {
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
                                    children: `BREAKERS`,
                                  }),
                                }),
                              },
                              icF1RIDkS: {
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
                                    children: `MEASURING METERS`,
                                  }),
                                }),
                                text: C,
                              },
                              OHmVzOUED: {
                                children: c(r, {
                                  children: [
                                    o(d.p, {
                                      style: {
                                        "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                        "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `20px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `28px`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255)))`,
                                      },
                                      children: `Pipe Wrench`,
                                    }),
                                    o(d.p, {
                                      style: {
                                        "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                                        "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                        "--framer-font-size": `11px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-line-height": `14px`,
                                        "--framer-text-color": `var(--extracted-2gxw0f, var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255)))`,
                                      },
                                      children: `Heavy-duty wrench designed for strong grip and easy adjustment on pipes and fittings.`,
                                    }),
                                  ],
                                }),
                              },
                            },
                            w,
                            D
                          ),
                        }),
                      }),
                      o(d.div, {
                        className: `framer-1rjwg4n`,
                        layoutDependency: N,
                        layoutId: `FPnqrAbix`,
                        children: o(A, {
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
                                (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 - 12 - 229) / 1
                              ) *
                                1 +
                                140 +
                                65 +
                                24)) /
                              2 +
                              (Math.max(
                                0,
                                (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 - 12 - 229) / 1
                              ) *
                                1 +
                                140) +
                              24) +
                            0 +
                            0,
                          ...H(
                            {
                              OHmVzOUED: {
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
                                        295) /
                                        1
                                    ) *
                                      1 +
                                      210 +
                                      85 +
                                      0)) /
                                    2 +
                                    (Math.max(
                                      0,
                                      (Math.max(0, ((m?.height || 400) - 0 - 0) / 1) * 1 -
                                        12 -
                                        295) /
                                        1
                                    ) *
                                      1 +
                                      210) +
                                    0) +
                                  20 +
                                  0,
                              },
                            },
                            w,
                            D
                          ),
                          children: o(g, {
                            className: `framer-tmld0j-container`,
                            layoutDependency: N,
                            layoutId: `BbunQqBgH-container`,
                            nodeId: `BbunQqBgH`,
                            rendersWithMotion: !0,
                            scopeId: `EI9rfoR3c`,
                            children: o(ye, {
                              height: `100%`,
                              id: `BbunQqBgH`,
                              layoutId: `BbunQqBgH`,
                              RI5H2JEqr: te,
                              style: { height: `100%`, width: `100%` },
                              variant: `L0ZpVUzqu`,
                              width: `100%`,
                              ...H({ OHmVzOUED: { variant: `AjA4ihSQw` } }, w, D),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-gyvEr.framer-1lju8zq, .framer-gyvEr .framer-1lju8zq { display: block; }`,
          `.framer-gyvEr.framer-goz4ju { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 400px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-gyvEr .framer-1vl0xh8 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: center; overflow: visible; padding: 12px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-gyvEr .framer-91yfuz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: center; overflow: visible; padding: 12px 12px 0px 70px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-gyvEr .framer-pjo47a { flex: 1 0 0px; height: 1px; position: relative; width: auto; }`,
          `.framer-gyvEr .framer-1u0rmdc { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-gyvEr .framer-1qlgc46 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 15px; position: relative; width: 100%; }`,
          `.framer-gyvEr .framer-1usf6bx { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-gyvEr .framer-1rjwg4n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px 15px 25px 15px; position: relative; width: 100%; }`,
          `.framer-gyvEr .framer-tmld0j-container { flex: none; height: 40px; position: relative; width: 100px; }`,
          `.framer-gyvEr.framer-v-5dz62.framer-goz4ju { width: 386px; }`,
          `.framer-gyvEr.framer-v-5dz62 .framer-1vl0xh8 { gap: 0px; order: 0; }`,
          `.framer-gyvEr.framer-v-5dz62 .framer-1rjwg4n { padding: 20px 15px 25px 15px; }`,
          `.framer-gyvEr[data-border="true"]::after, .framer-gyvEr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-gyvEr`
      )),
      (G.displayName = `ImageGalley 6`),
      (G.defaultProps = { height: 400, width: 560 }),
      b(G, {
        variant: {
          options: [`fsoy5qkvU`, `HUkYHii8o`, `icF1RIDkS`, `FiOI2gYGn`, `OHmVzOUED`],
          optionTitles: [`Default`, `Variant 2`, `Variant 3`, `Variant 4`, `Others product3`],
          title: `Variant`,
          type: k.Enum,
        },
        RcXo4l725: { title: `Mouse Enter`, type: k.EventHandler },
        xy7JW5bva: { title: `Internal Card`, type: k.Link },
        wx_mw4Gff: {
          __defaultAssetReference: `data:framer/asset-reference,znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?originalFilename=elena-mozhvilo-PW5aZbLb-ro-unsplash.jpg&width=6016&height=4000`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,znLvPzKq8hepwQtkY9bxWdaaJpQ.jpg?originalFilename=elena-mozhvilo-PW5aZbLb-ro-unsplash.jpg&width=6016&height=4000`,
          },
          title: `Image 2`,
          type: k.ResponsiveImage,
        },
        gWbxwWnwP: {
          defaultValue: `MEASURING METERS`,
          displayTextArea: !1,
          title: `Title 2`,
          type: k.String,
        },
        j8NbB0fcK: { title: `Image 3`, type: k.ResponsiveImage },
      }),
      N(
        G,
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
          ...De,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Le,
  Re,
  q,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  J,
  Ze,
  Y,
  X,
  Z,
  Qe,
  $e,
  et,
  tt,
  nt,
  Q,
  rt = e(() => {
    (s(),
      x(),
      m(),
      u(),
      ue(),
      he(),
      fe(),
      _e(),
      L(),
      Ie(),
      Ce(),
      xe(),
      Se(),
      z(),
      (Le = _(ge)),
      (Re = _(I)),
      (q = T(g)),
      (ze = T(P)),
      (Be = _(de)),
      (Ve = _(B)),
      (He = _(R)),
      (Ue = _(G)),
      (We = _(Te)),
      (Ge = _(be)),
      (Ke = _(we)),
      (qe = [
        `kIdsWxA43`,
        `rko0nvupU`,
        `k3M_hxZM6`,
        `y7Fv0SwBt`,
        `HQ28mprTM`,
        `roFKZtMdp`,
        `vUiriS6iA`,
        `OczwEJV4b`,
        `NQxdwbdbs`,
        `pVEDpiRqf`,
        `xMUkb7mdX`,
      ]),
      (Je = `framer-3MNub`),
      (Ye = {
        HQ28mprTM: `framer-v-ss4tle`,
        k3M_hxZM6: `framer-v-568sqb`,
        kIdsWxA43: `framer-v-2i1scq`,
        NQxdwbdbs: `framer-v-1bhevii`,
        OczwEJV4b: `framer-v-11xx4vn`,
        pVEDpiRqf: `framer-v-af2187`,
        rko0nvupU: `framer-v-1qmy97m`,
        roFKZtMdp: `framer-v-1pryv5x`,
        vUiriS6iA: `framer-v-irr39h`,
        xMUkb7mdX: `framer-v-1c0fvl8`,
        y7Fv0SwBt: `framer-v-zpkb7j`,
      }),
      (Xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 40,
      }),
      (Ze = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
      (Y = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (X = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
      (Z = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (Qe = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      ($e = {
        "Hand Tools others phone": `xMUkb7mdX`,
        "Hand Tools others Tablet": `pVEDpiRqf`,
        "Measuring and digital meters desktop": `HQ28mprTM`,
        "Measuring and digital meters phone": `vUiriS6iA`,
        "Measuring and digital meters tablets": `roFKZtMdp`,
        "Power tools desktop": `y7Fv0SwBt`,
        "Variant 8": `OczwEJV4b`,
        "Variant 9": `NQxdwbdbs`,
        Desktop: `kIdsWxA43`,
        Phone: `k3M_hxZM6`,
        Tablet: `rko0nvupU`,
      }),
      (et = d.create(r)),
      (tt = ({
        click: e,
        click2: t,
        height: n,
        id: r,
        internalCard2: i,
        internalCard3: a,
        internalCard5: o,
        text: s,
        title10: c,
        title11: l,
        title2: u,
        title5: d,
        title7: f,
        title8: p,
        title9: m,
        width: h,
        ...g
      }) => ({
        ...g,
        aQ8TwzSX5: o ?? g.aQ8TwzSX5,
        BQZ0haarw: e ?? g.BQZ0haarw,
        DKR6UgLH7: d ?? g.DKR6UgLH7 ?? `Digital and Measuring meters`,
        ECRa6tI8e: c ?? g.ECRa6tI8e ?? `MEASURING METERS`,
        IGNsFW842: s ?? g.IGNsFW842 ?? `Products`,
        l8mDH5I68: f ?? g.l8mDH5I68 ?? `DIGITAL METERS`,
        pav9EhmdT: m ?? g.pav9EhmdT ?? `Measuring & Digital Meters`,
        rUPZqhUgR: t ?? g.rUPZqhUgR,
        SdP7L1icC: a ?? g.SdP7L1icC,
        sTnpSD0NL: i ?? g.sTnpSD0NL,
        T5FqHC2SZ: p ?? g.T5FqHC2SZ ?? `MEASURING METERS`,
        TSkWkWiUk: l ?? g.TSkWkWiUk ?? `Measuring & Digital Meters`,
        variant: $e[g.variant] ?? g.variant ?? `kIdsWxA43`,
        wUzdR4KlJ: u ?? g.wUzdR4KlJ ?? `MEASURING METERS`,
      })),
      (nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = E(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = ce(),
            m = ae(),
            {
              style: h,
              className: _,
              layoutId: ee,
              variant: y,
              BQZ0haarw: b,
              rUPZqhUgR: x,
              wUzdR4KlJ: te,
              DKR6UgLH7: C,
              IGNsFW842: ne,
              l8mDH5I68: w,
              sTnpSD0NL: T,
              SdP7L1icC: ie,
              T5FqHC2SZ: E,
              pav9EhmdT: D,
              ECRa6tI8e: oe,
              TSkWkWiUk: k,
              aQ8TwzSX5: M,
              ...N
            } = tt(e),
            {
              baseVariant: P,
              classNames: ue,
              clearLoadingGesture: fe,
              gestureHandlers: pe,
              gestureVariant: F,
              isLoading: he,
              setGestureState: _e,
              setVariant: ve,
              variants: ye,
            } = se({
              cycleOrder: qe,
              defaultVariant: `kIdsWxA43`,
              ref: a,
              variant: y,
              variantClassNames: Ye,
            }),
            L = nt(e, ye),
            { activeVariantCallback: xe, delay: Se } = le(P),
            Ce = xe(async (...e) => {
              if (b && (await b(...e)) === !1) return !1;
            }),
            z = xe(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
            }),
            Ee = v(Je, me),
            V = () => P === `xMUkb7mdX`,
            H = () => P === `pVEDpiRqf`,
            De = () => ![`pVEDpiRqf`, `xMUkb7mdX`].includes(P),
            Oe = () => ![`HQ28mprTM`, `roFKZtMdp`, `vUiriS6iA`].includes(P),
            ke = () =>
              ![
                `y7Fv0SwBt`,
                `HQ28mprTM`,
                `roFKZtMdp`,
                `vUiriS6iA`,
                `OczwEJV4b`,
                `NQxdwbdbs`,
              ].includes(P);
          re();
          let U = () => !![`y7Fv0SwBt`, `OczwEJV4b`, `NQxdwbdbs`].includes(P),
            Ae = () => ![`y7Fv0SwBt`, `OczwEJV4b`, `NQxdwbdbs`].includes(P),
            je = () =>
              ![`y7Fv0SwBt`, `OczwEJV4b`, `NQxdwbdbs`, `pVEDpiRqf`, `xMUkb7mdX`].includes(P),
            W = () =>
              ![
                `y7Fv0SwBt`,
                `HQ28mprTM`,
                `roFKZtMdp`,
                `vUiriS6iA`,
                `OczwEJV4b`,
                `NQxdwbdbs`,
                `pVEDpiRqf`,
                `xMUkb7mdX`,
              ].includes(P);
          return o(p, {
            id: ee ?? s,
            children: o(et, {
              animate: ye,
              initial: !1,
              children: o(Qe, {
                value: Xe,
                children: c(d.section, {
                  ...N,
                  ...pe,
                  className: v(Ee, `framer-2i1scq`, _, ue),
                  "data-framer-name": `Desktop`,
                  layoutDependency: L,
                  layoutId: `kIdsWxA43`,
                  ref: a,
                  style: {
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    ...h,
                  },
                  ...K(
                    {
                      HQ28mprTM: { "data-framer-name": `Measuring and digital meters desktop` },
                      k3M_hxZM6: { "data-framer-name": `Phone` },
                      NQxdwbdbs: { "data-framer-name": `Variant 9` },
                      OczwEJV4b: { "data-framer-name": `Variant 8` },
                      pVEDpiRqf: { "data-framer-name": `Hand Tools others Tablet` },
                      rko0nvupU: { "data-framer-name": `Tablet` },
                      roFKZtMdp: { "data-framer-name": `Measuring and digital meters tablets` },
                      vUiriS6iA: { "data-framer-name": `Measuring and digital meters phone` },
                      xMUkb7mdX: { "data-framer-name": `Hand Tools others phone` },
                      y7Fv0SwBt: { "data-framer-name": `Power tools desktop` },
                    },
                    P,
                    F
                  ),
                  children: [
                    V() &&
                      c(d.div, {
                        className: `framer-1ul4373`,
                        "data-framer-name": `Text`,
                        layoutDependency: L,
                        layoutId: `TGius5_AJ`,
                        children: [
                          o(O, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `yG0ze0cuB`,
                            openInNewTab: !1,
                            scopeId: `MRhy6J9LM`,
                            children: o(d.a, {
                              className: `framer-1jqgedo framer-1h7vasl`,
                              layoutDependency: L,
                              layoutId: `yG0ze0cuB`,
                              children: o(ge, {
                                animated: !0,
                                className: `framer-r3zu2m`,
                                layoutDependency: L,
                                layoutId: `f8Oxqa6ox`,
                                style: {
                                  "--1335ju": 1.7,
                                  "--18mrqx2": `rgb(0, 0, 0)`,
                                  "--3it368": 1,
                                },
                              }),
                            }),
                          }),
                          o(A, {
                            height: 26,
                            ...K(
                              {
                                xMUkb7mdX: {
                                  y:
                                    (m?.y || 0) +
                                    80 +
                                    (((m?.height || 200) - 160 - 4298.4) / 2 + 0 + 0) +
                                    0 +
                                    36,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(q, {
                              __framer__animate: { transition: Ze },
                              __framer__animateOnce: !0,
                              __framer__enter: J,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-145iamo-container`,
                              layoutDependency: L,
                              layoutId: `jh3r6ws3X-container`,
                              nodeId: `jh3r6ws3X`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(I, {
                                ggTbrSuHk: `Hand tools`,
                                height: `100%`,
                                id: `jh3r6ws3X`,
                                layoutId: `jh3r6ws3X`,
                                variant: Y(`z6oSgdJxk`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          o(ze, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: J,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            children: o(r, {
                              children: o(d.h3, {
                                className: `framer-styles-preset-1d7ew99`,
                                "data-styles-preset": `nl385Jssa`,
                                children: `Other Products`,
                              }),
                            }),
                            className: `framer-2vxkkg`,
                            fonts: [`Inter`],
                            layoutDependency: L,
                            layoutId: `J7v25fdsb`,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    H() &&
                      c(d.div, {
                        className: `framer-19xgl5q`,
                        "data-framer-name": `Text`,
                        layoutDependency: L,
                        layoutId: `GwcS64Ula`,
                        children: [
                          o(O, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `nt57nnMdM`,
                            openInNewTab: !1,
                            scopeId: `MRhy6J9LM`,
                            children: o(d.a, {
                              className: `framer-k6vlis framer-1h7vasl`,
                              layoutDependency: L,
                              layoutId: `nt57nnMdM`,
                              children: o(ge, {
                                animated: !0,
                                className: `framer-4ctgzc`,
                                layoutDependency: L,
                                layoutId: `cHCH09Hca`,
                                style: {
                                  "--1335ju": 1.7,
                                  "--18mrqx2": `rgb(0, 0, 0)`,
                                  "--3it368": 1,
                                },
                              }),
                            }),
                          }),
                          o(A, {
                            height: 26,
                            ...K(
                              {
                                pVEDpiRqf: {
                                  y:
                                    (m?.y || 0) +
                                    80 +
                                    (((m?.height || 200) - 160 - 2223.4) / 2 + 0 + 0) +
                                    0 +
                                    36,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(q, {
                              __framer__animate: { transition: Ze },
                              __framer__animateOnce: !0,
                              __framer__enter: J,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-t7h1hl-container`,
                              layoutDependency: L,
                              layoutId: `tlJElAQJP-container`,
                              nodeId: `tlJElAQJP`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(I, {
                                ggTbrSuHk: `Hand tools`,
                                height: `100%`,
                                id: `tlJElAQJP`,
                                layoutId: `tlJElAQJP`,
                                variant: Y(`z6oSgdJxk`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          o(ze, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: J,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            children: o(r, {
                              children: o(d.h3, {
                                className: `framer-styles-preset-1d7ew99`,
                                "data-styles-preset": `nl385Jssa`,
                                children: `Other Products`,
                              }),
                            }),
                            className: `framer-1sayn6q`,
                            fonts: [`Inter`],
                            layoutDependency: L,
                            layoutId: `tyV1Ei4uH`,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    De() &&
                      c(d.div, {
                        className: `framer-fmj29g`,
                        "data-framer-name": `Text`,
                        layoutDependency: L,
                        layoutId: `hMkkANNKj`,
                        children: [
                          c(d.div, {
                            className: `framer-18clrk4`,
                            layoutDependency: L,
                            layoutId: `Ogonwm_HI`,
                            children: [
                              o(A, {
                                height: 26,
                                y:
                                  (m?.y || 0) +
                                  96 +
                                  (((m?.height || 1663) - 192 - 1470.4) / 2 + 0 + 0) +
                                  0 +
                                  0 +
                                  0 +
                                  0,
                                ...K(
                                  {
                                    HQ28mprTM: {
                                      y:
                                        (m?.y || 0) +
                                        96 +
                                        (((m?.height || 200) - 192 - 542.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    k3M_hxZM6: {
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 3290) - 160 - 3129.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    NQxdwbdbs: {
                                      y:
                                        (m?.y || 0) +
                                        96 +
                                        (((m?.height || 200) - 192 - 1710.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    OczwEJV4b: {
                                      y:
                                        (m?.y || 0) +
                                        96 +
                                        (((m?.height || 200) - 192 - 1710.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    rko0nvupU: {
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 2046) - 160 - 1885.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    roFKZtMdp: {
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 542.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    vUiriS6iA: {
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 941.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                    y7Fv0SwBt: {
                                      y:
                                        (m?.y || 0) +
                                        96 +
                                        (((m?.height || 1849) - 192 - 1710.4) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: Ze },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1565jar-container`,
                                  layoutDependency: L,
                                  layoutId: `gQ0eJgN9a-container`,
                                  nodeId: `gQ0eJgN9a`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  style: { opacity: 1 },
                                  variants: {
                                    HQ28mprTM: { opacity: 0.6 },
                                    NQxdwbdbs: { opacity: 1 },
                                    OczwEJV4b: { opacity: 1 },
                                    roFKZtMdp: { opacity: 1 },
                                    vUiriS6iA: { opacity: 1 },
                                  },
                                  ...K({ HQ28mprTM: { __targetOpacity: 0.6 } }, P, F),
                                  children: o(I, {
                                    ggTbrSuHk: `Products`,
                                    height: `100%`,
                                    id: `gQ0eJgN9a`,
                                    layoutId: `gQ0eJgN9a`,
                                    variant: Y(`z6oSgdJxk`),
                                    width: `100%`,
                                    ...K({ HQ28mprTM: { ggTbrSuHk: ne } }, P, F),
                                  }),
                                }),
                              }),
                              o(ze, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: J,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                children: o(r, {
                                  children: o(d.h3, {
                                    className: `framer-styles-preset-1d7ew99`,
                                    "data-styles-preset": `nl385Jssa`,
                                    children: `Hand Tools`,
                                  }),
                                }),
                                className: `framer-1f2l5jp`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `KlxKKBAOR`,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                                ...K(
                                  {
                                    HQ28mprTM: {
                                      children: o(r, {
                                        children: o(d.h3, {
                                          className: `framer-styles-preset-1d7ew99`,
                                          "data-styles-preset": `nl385Jssa`,
                                          children: `Digital and Measuring meters`,
                                        }),
                                      }),
                                      text: C,
                                    },
                                    roFKZtMdp: {
                                      children: o(r, {
                                        children: o(d.h3, {
                                          className: `framer-styles-preset-1d7ew99`,
                                          "data-styles-preset": `nl385Jssa`,
                                          children: `Measuring & Digital Meters`,
                                        }),
                                      }),
                                      text: D,
                                    },
                                    vUiriS6iA: {
                                      children: o(r, {
                                        children: o(d.h3, {
                                          className: `framer-styles-preset-1d7ew99`,
                                          "data-styles-preset": `nl385Jssa`,
                                          children: `Measuring & Digital Meters`,
                                        }),
                                      }),
                                      text: k,
                                    },
                                  },
                                  P,
                                  F
                                ),
                              }),
                            ],
                          }),
                          Oe() &&
                            o(A, {
                              children: o(g, {
                                className: `framer-bek3tr-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: L,
                                layoutId: `aWZccoCXN-container`,
                                nodeId: `aWZccoCXN`,
                                rendersWithMotion: !0,
                                scopeId: `MRhy6J9LM`,
                                children: o(de, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 0,
                                    overflow: !1,
                                  },
                                  gap: 10,
                                  height: `100%`,
                                  hoverFactor: 1,
                                  id: `aWZccoCXN`,
                                  layoutId: `aWZccoCXN`,
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  sizingOptions: { heightType: !0, widthType: !0 },
                                  slots: [
                                    o(j, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 434.6666666666667,
                                        intrinsicWidth: 454.6666666666667,
                                        pixelHeight: 652,
                                        pixelWidth: 682,
                                        sizes: `50px`,
                                        src: `../../assets/images/zX1iZ7EJf6QCxXebWkxGWri5oM.png?width=682&height=652`,
                                        srcSet: `../../assets/images/zX1iZ7EJf6QCxXebWkxGWri5oM.png 512w,../../assets/images/zX1iZ7EJf6QCxXebWkxGWri5oM.png?width=682&height=652 682w`,
                                      },
                                      className: `framer-fvof56`,
                                      "data-framer-name": `Logo 1`,
                                      layoutDependency: L,
                                      layoutId: `t2POyQJjj`,
                                    }),
                                    o(j, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 476,
                                        intrinsicWidth: 762,
                                        pixelHeight: 714,
                                        pixelWidth: 1143,
                                        sizes: `80px`,
                                        src: `../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png?width=1143&height=714`,
                                        srcSet: `../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png 512w,../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png?scale-down-to=1024&width=1143&height=714 1024w,../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png?width=1143&height=714 1143w`,
                                      },
                                      className: `framer-1r9z3fw`,
                                      "data-framer-name": `Logo 6`,
                                      layoutDependency: L,
                                      layoutId: `ctZy45nTG`,
                                    }),
                                    o(j, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 427.3333333333333,
                                        intrinsicWidth: 787.3333333333334,
                                        pixelHeight: 641,
                                        pixelWidth: 1181,
                                        sizes: `80px`,
                                        src: `../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png?width=1181&height=641`,
                                        srcSet: `../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png 512w,../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png?scale-down-to=1024&width=1181&height=641 1024w,../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png?width=1181&height=641 1181w`,
                                      },
                                      className: `framer-mpshz7`,
                                      "data-framer-name": `Logo 7`,
                                      layoutDependency: L,
                                      layoutId: `CfkAGOMpp`,
                                    }),
                                    o(j, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 325.3333333333333,
                                        intrinsicWidth: 983.3333333333334,
                                        pixelHeight: 488,
                                        pixelWidth: 1475,
                                        sizes: `70px`,
                                        src: `../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png?width=1475&height=488`,
                                        srcSet: `../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png 512w,../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png?scale-down-to=1024&width=1475&height=488 1024w,../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png?width=1475&height=488 1475w`,
                                      },
                                      className: `framer-4gyir0`,
                                      "data-framer-name": `Logo 15`,
                                      layoutDependency: L,
                                      layoutId: `VluG4EsYT`,
                                    }),
                                  ],
                                  speed: 20,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                        ],
                      }),
                    c(d.div, {
                      className: `framer-ch5zk3`,
                      "data-framer-name": `ClassesGallery`,
                      layoutDependency: L,
                      layoutId: `E23PtWyzg`,
                      children: [
                        ke() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `MhKEpFh9_` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `MhKEpFh9_` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `MhKEpFh9_` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `MhKEpFh9_` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `MhKEpFh9_` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 399,
                                width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                y:
                                  (m?.y || 0) +
                                  96 +
                                  (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                                  0 +
                                  0,
                                ...K(
                                  {
                                    k3M_hxZM6: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                        0 +
                                        0,
                                    },
                                    pVEDpiRqf: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    rko0nvupU: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    xMUkb7mdX: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        0,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(g, {
                                  className: `framer-w3mpr2-container`,
                                  layoutDependency: L,
                                  layoutId: `ANFgMltyF-container`,
                                  nodeId: `ANFgMltyF`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    cYMryRtIV: Z(
                                      {
                                        pixelHeight: 6128,
                                        pixelWidth: 4595,
                                        positionX: `36.2%`,
                                        positionY: `82.1%`,
                                        src: `../../assets/images/0a5yaiZjppvNZJFTYLCDcHCYd8.jpg?width=4595&height=6128`,
                                        srcSet: `../../assets/images/0a5yaiZjppvNZJFTYLCDcHCYd8.jpg 767w,../../assets/images/0a5yaiZjppvNZJFTYLCDcHCYd8.jpg?scale-down-to=2048&width=4595&height=6128 1535w,../../assets/images/0a5yaiZjppvNZJFTYLCDcHCYd8.jpg?scale-down-to=4096&width=4595&height=6128 3071w,../../assets/images/0a5yaiZjppvNZJFTYLCDcHCYd8.jpg?width=4595&height=6128 4595w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `ANFgMltyF`,
                                    layoutId: `ANFgMltyF`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: Ce,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`Kzn20lAXe`),
                                    vxhDk_2Ee: `SPANNERS`,
                                    width: `100%`,
                                    ...K(
                                      {
                                        k3M_hxZM6: { uL9qbEmnu: e[2] },
                                        pVEDpiRqf: { uL9qbEmnu: e[3], variant: Y(`zK52DbhPQ`) },
                                        rko0nvupU: { uL9qbEmnu: e[1] },
                                        xMUkb7mdX: { uL9qbEmnu: e[4], variant: Y(`zK52DbhPQ`) },
                                      },
                                      P,
                                      F
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-1gi2cx8-container`,
                              layoutDependency: L,
                              layoutId: `eFt1fj0y1-container`,
                              nodeId: `eFt1fj0y1`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `eFt1fj0y1`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `eFt1fj0y1`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Tool Trolly Box `,
                              }),
                            }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-3g6c81-container`,
                              layoutDependency: L,
                              layoutId: `Fr3gsXyBm-container`,
                              nodeId: `Fr3gsXyBm`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `Fr3gsXyBm`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `Fr3gsXyBm`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Tool Box`,
                              }),
                            }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    0,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-1pw4j30-container`,
                              layoutDependency: L,
                              layoutId: `VXnriw0Z2-container`,
                              nodeId: `VXnriw0Z2`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `VXnriw0Z2`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `VXnriw0Z2`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Tool Bag`,
                              }),
                            }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-1e7vl27-container`,
                              layoutDependency: L,
                              layoutId: `n4wPRmMjJ-container`,
                              nodeId: `n4wPRmMjJ`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `n4wPRmMjJ`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `n4wPRmMjJ`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Hydraluic Jack Image`,
                              }),
                            }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-pm50u5-container`,
                              layoutDependency: L,
                              layoutId: `HzVzIC7kB-container`,
                              nodeId: `HzVzIC7kB`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `HzVzIC7kB`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `HzVzIC7kB`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Pipe wrench`,
                              }),
                            }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    496,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-m3wjj6-container`,
                              layoutDependency: L,
                              layoutId: `COUb0z5Tg-container`,
                              nodeId: `COUb0z5Tg`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `COUb0z5Tg`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `COUb0z5Tg`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Level Measuring tool`,
                              }),
                            }),
                          }),
                        U() &&
                          o(A, {
                            ...K(
                              {
                                NQxdwbdbs: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    992,
                                },
                                OczwEJV4b: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 200) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    992,
                                },
                                y7Fv0SwBt: {
                                  height: 480,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    96 +
                                    (((m?.height || 1849) - 192 - 1710.4) / 2 + 198.4 + 40) +
                                    0 +
                                    992,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-4kz05j-container`,
                              layoutDependency: L,
                              layoutId: `MzJZ1Yzck-container`,
                              nodeId: `MzJZ1Yzck`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(R, {
                                height: `100%`,
                                id: `MzJZ1Yzck`,
                                jDxkKoQ2E: o(r, {
                                  children: o(`p`, {
                                    children: `AAZ Tools Co is a leading supplier of industrial hardware and tools catering to the solar, wind, construction, and maintenance sectors across India.`,
                                  }),
                                }),
                                layoutId: `MzJZ1Yzck`,
                                style: { width: `100%` },
                                width: `100%`,
                                xTZBddCAm: `Oil Can`,
                              }),
                            }),
                          }),
                        Ae() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 399,
                                width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                y:
                                  (m?.y || 0) +
                                  96 +
                                  (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                                  0 +
                                  0,
                                ...K(
                                  {
                                    HQ28mprTM: {
                                      y:
                                        (m?.y || 0) +
                                        96 +
                                        (((m?.height || 200) - 192 - 542.4) / 2 + 86.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    k3M_hxZM6: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                        0 +
                                        415,
                                    },
                                    pVEDpiRqf: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    rko0nvupU: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    roFKZtMdp: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 542.4) / 2 + 86.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    vUiriS6iA: {
                                      width: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 941.4) / 2 + 86.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    xMUkb7mdX: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        415,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(g, {
                                  className: `framer-ix7t16-container`,
                                  layoutDependency: L,
                                  layoutId: `s6xHdrbWE-container`,
                                  nodeId: `s6xHdrbWE`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    cYMryRtIV: Z(
                                      {
                                        pixelHeight: 969,
                                        pixelWidth: 734,
                                        src: `../../assets/images/3Kt3cpTZRZBZCzHiBWdLFcDxpY.jpg`,
                                        srcSet: `../../assets/images/3Kt3cpTZRZBZCzHiBWdLFcDxpY.jpg 734w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `s6xHdrbWE`,
                                    layoutId: `s6xHdrbWE`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`Kzn20lAXe`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K(
                                      {
                                        HQ28mprTM: {
                                          cYMryRtIV: Z(
                                            {
                                              pixelHeight: 352,
                                              pixelWidth: 500,
                                              src: `https://framerusercontent.com/images/rAMK30IC2QKJiII2f7p96nOtgU.webp?width=500&height=352`,
                                            },
                                            ``
                                          ),
                                          r0i2S6TZx: w,
                                          uL9qbEmnu: void 0,
                                          variant: Y(`Ths73yLaQ`),
                                          ZHrtcxY3l: ie,
                                        },
                                        k3M_hxZM6: { uL9qbEmnu: e[2] },
                                        pVEDpiRqf: { uL9qbEmnu: e[5], variant: Y(`Z6VLgW6Ea`) },
                                        rko0nvupU: { uL9qbEmnu: e[1] },
                                        roFKZtMdp: {
                                          cYMryRtIV: Z(
                                            {
                                              pixelHeight: 352,
                                              pixelWidth: 500,
                                              src: `https://framerusercontent.com/images/rAMK30IC2QKJiII2f7p96nOtgU.webp?width=500&height=352`,
                                            },
                                            ``
                                          ),
                                          uL9qbEmnu: e[3],
                                          variant: Y(`Ths73yLaQ`),
                                          vxhDk_2Ee: `Angle grinders`,
                                        },
                                        vUiriS6iA: {
                                          cYMryRtIV: Z(
                                            {
                                              pixelHeight: 352,
                                              pixelWidth: 500,
                                              src: `https://framerusercontent.com/images/rAMK30IC2QKJiII2f7p96nOtgU.webp?width=500&height=352`,
                                            },
                                            ``
                                          ),
                                          uL9qbEmnu: e[4],
                                          variant: Y(`Ths73yLaQ`),
                                        },
                                        xMUkb7mdX: { uL9qbEmnu: e[6], variant: Y(`Z6VLgW6Ea`) },
                                      },
                                      P,
                                      F
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        830,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-g0jhup-container`,
                                  layoutDependency: L,
                                  layoutId: `XHef80F8M-container`,
                                  nodeId: `XHef80F8M`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `XHef80F8M`,
                                    layoutId: `XHef80F8M`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`qv4JBZgi9`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        1245,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1jon8yb-container`,
                                  layoutDependency: L,
                                  layoutId: `sTj0kSnc4-container`,
                                  nodeId: `sTj0kSnc4`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `sTj0kSnc4`,
                                    layoutId: `sTj0kSnc4`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`w0EpxMA2p`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        1660,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-okk0xo-container`,
                                  layoutDependency: L,
                                  layoutId: `E6EBnAkQD-container`,
                                  nodeId: `E6EBnAkQD`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `E6EBnAkQD`,
                                    layoutId: `E6EBnAkQD`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`bsYoGKlae`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        2075,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-p2l43x-container`,
                                  layoutDependency: L,
                                  layoutId: `ZWvnPgPJ4-container`,
                                  nodeId: `ZWvnPgPJ4`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `ZWvnPgPJ4`,
                                    layoutId: `ZWvnPgPJ4`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`YjBaLFXfF`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        2490,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-apxivr-container`,
                                  layoutDependency: L,
                                  layoutId: `lVaWN2L6c-container`,
                                  nodeId: `lVaWN2L6c`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `lVaWN2L6c`,
                                    layoutId: `lVaWN2L6c`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`Hg1vU9Bcl`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        2905,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1vzd0wi-container`,
                                  layoutDependency: L,
                                  layoutId: `vbUezM9ad-container`,
                                  nodeId: `vbUezM9ad`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `vbUezM9ad`,
                                    layoutId: `vbUezM9ad`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`jH5XPXSYa`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        3320,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1t88is8-container`,
                                  layoutDependency: L,
                                  layoutId: `LxJBxqn07-container`,
                                  nodeId: `LxJBxqn07`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `LxJBxqn07`,
                                    layoutId: `LxJBxqn07`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`SLQN7uHPM`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        V() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    xMUkb7mdX: {
                                      height: 399,
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 4298.4) / 2 + 124.4 + 40) +
                                        0 +
                                        3735,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-yqg8na-container`,
                                  layoutDependency: L,
                                  layoutId: `ka4bdfzCl-container`,
                                  nodeId: `ka4bdfzCl`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `ka4bdfzCl`,
                                    layoutId: `ka4bdfzCl`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`GODOYLRWH`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ xMUkb7mdX: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        415,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-xpxbwp-container`,
                                  layoutDependency: L,
                                  layoutId: `RrV1SAf1F-container`,
                                  nodeId: `RrV1SAf1F`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `RrV1SAf1F`,
                                    layoutId: `RrV1SAf1F`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`qv4JBZgi9`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        415,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-ljouub-container`,
                                  layoutDependency: L,
                                  layoutId: `xEn0cRq4X-container`,
                                  nodeId: `xEn0cRq4X`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `xEn0cRq4X`,
                                    layoutId: `xEn0cRq4X`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`w0EpxMA2p`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        830,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-2cs2vm-container`,
                                  layoutDependency: L,
                                  layoutId: `hLSels3q3-container`,
                                  nodeId: `hLSels3q3`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `hLSels3q3`,
                                    layoutId: `hLSels3q3`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`bsYoGKlae`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        830,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-v4momh-container`,
                                  layoutDependency: L,
                                  layoutId: `isgh7Dzhv-container`,
                                  nodeId: `isgh7Dzhv`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `isgh7Dzhv`,
                                    layoutId: `isgh7Dzhv`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`YjBaLFXfF`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        1245,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-syyj0f-container`,
                                  layoutDependency: L,
                                  layoutId: `HGPEfXyuU-container`,
                                  nodeId: `HGPEfXyuU`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `HGPEfXyuU`,
                                    layoutId: `HGPEfXyuU`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`Hg1vU9Bcl`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        1245,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1sgcp9g-container`,
                                  layoutDependency: L,
                                  layoutId: `fFwVi0vqN-container`,
                                  nodeId: `fFwVi0vqN`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `fFwVi0vqN`,
                                    layoutId: `fFwVi0vqN`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`jH5XPXSYa`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        1660,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-pbhh99-container`,
                                  layoutDependency: L,
                                  layoutId: `ZH5XfOdTu-container`,
                                  nodeId: `ZH5XfOdTu`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `ZH5XfOdTu`,
                                    layoutId: `ZH5XfOdTu`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`SLQN7uHPM`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        H() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                ...K(
                                  {
                                    pVEDpiRqf: {
                                      height: 399,
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 2223.4) / 2 + 124.4 + 40) +
                                        0 +
                                        1660,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(q, {
                                  __framer__animate: { transition: X },
                                  __framer__animateOnce: !0,
                                  __framer__enter: J,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-1spsooc-container`,
                                  layoutDependency: L,
                                  layoutId: `jaTk8wED5-container`,
                                  nodeId: `jaTk8wED5`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(B, {
                                    height: `100%`,
                                    id: `jaTk8wED5`,
                                    layoutId: `jaTk8wED5`,
                                    r0i2S6TZx: `FASTENERS `,
                                    RcXo4l725: z,
                                    style: { height: `100%`, width: `100%` },
                                    uL9qbEmnu: e[0],
                                    variant: Y(`GODOYLRWH`),
                                    vxhDk_2Ee: `PLIERS`,
                                    width: `100%`,
                                    ...K({ pVEDpiRqf: { uL9qbEmnu: e[1] } }, P, F),
                                  }),
                                }),
                              }),
                          }),
                        je() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `xjKIVWikz` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `xjKIVWikz` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `xjKIVWikz` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `huy0hzZNy` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 400,
                                width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                y:
                                  (m?.y || 0) +
                                  96 +
                                  (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                                  0 +
                                  0,
                                ...K(
                                  {
                                    HQ28mprTM: {
                                      y:
                                        (m?.y || 0) +
                                        96 +
                                        (((m?.height || 200) - 192 - 542.4) / 2 + 86.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    k3M_hxZM6: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                        0 +
                                        830,
                                    },
                                    rko0nvupU: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                        0 +
                                        415,
                                    },
                                    roFKZtMdp: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 542.4) / 2 + 86.4 + 40) +
                                        0 +
                                        0,
                                    },
                                    vUiriS6iA: {
                                      width: `max(${m?.width || `100vw`} - 32px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 200) - 160 - 941.4) / 2 + 86.4 + 40) +
                                        0 +
                                        415,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(g, {
                                  className: `framer-1r4nucw-container`,
                                  layoutDependency: L,
                                  layoutId: `zaLMvQENo-container`,
                                  nodeId: `zaLMvQENo`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(G, {
                                    gWbxwWnwP: `MEASURING METERS`,
                                    height: `100%`,
                                    id: `zaLMvQENo`,
                                    layoutId: `zaLMvQENo`,
                                    style: { width: `100%` },
                                    variant: Y(`fsoy5qkvU`),
                                    width: `100%`,
                                    xy7JW5bva: e[0],
                                    ...K(
                                      {
                                        HQ28mprTM: {
                                          gWbxwWnwP: te,
                                          variant: Y(`icF1RIDkS`),
                                          wx_mw4Gff: Z(
                                            {
                                              pixelHeight: 450,
                                              pixelWidth: 800,
                                              src: `https://framerusercontent.com/images/3xvgIvC2124T8T2VGu4PiBWqMng.webp?width=800&height=450`,
                                              srcSet: `https://framerusercontent.com/images/3xvgIvC2124T8T2VGu4PiBWqMng.webp?scale-down-to=512&width=800&height=450 512w,https://framerusercontent.com/images/3xvgIvC2124T8T2VGu4PiBWqMng.webp?width=800&height=450 800w`,
                                            },
                                            ``
                                          ),
                                          xy7JW5bva: T,
                                        },
                                        k3M_hxZM6: { xy7JW5bva: e[2] },
                                        rko0nvupU: { xy7JW5bva: e[1] },
                                        roFKZtMdp: {
                                          gWbxwWnwP: E,
                                          variant: Y(`icF1RIDkS`),
                                          xy7JW5bva: M,
                                        },
                                        vUiriS6iA: {
                                          gWbxwWnwP: oe,
                                          variant: Y(`icF1RIDkS`),
                                          xy7JW5bva: e[3],
                                        },
                                      },
                                      P,
                                      F
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        W() &&
                          o(A, {
                            height: 400,
                            width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                            y:
                              (m?.y || 0) +
                              96 +
                              (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                              0 +
                              416,
                            ...K(
                              {
                                k3M_hxZM6: {
                                  width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    80 +
                                    (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                    0 +
                                    1246,
                                },
                                rko0nvupU: {
                                  width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    80 +
                                    (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                    0 +
                                    415,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-nvvyvp-container`,
                              layoutDependency: L,
                              layoutId: `jusakTeAb-container`,
                              nodeId: `jusakTeAb`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(Te, {
                                cYMryRtIV: Z(
                                  {
                                    pixelHeight: 5304,
                                    pixelWidth: 7952,
                                    src: `../../assets/images/PVp4Nx31iquW0Z28uCOBskAa4.jpg?width=7952&height=5304`,
                                    srcSet: `../../assets/images/PVp4Nx31iquW0Z28uCOBskAa4.jpg 512w,../../assets/images/PVp4Nx31iquW0Z28uCOBskAa4.jpg?scale-down-to=1024&width=7952&height=5304 1024w,../../assets/images/PVp4Nx31iquW0Z28uCOBskAa4.jpg?scale-down-to=2048&width=7952&height=5304 2048w,../../assets/images/PVp4Nx31iquW0Z28uCOBskAa4.jpg?scale-down-to=4096&width=7952&height=5304 4096w,../../assets/images/PVp4Nx31iquW0Z28uCOBskAa4.jpg?width=7952&height=5304 7952w`,
                                  },
                                  ``
                                ),
                                height: `100%`,
                                id: `jusakTeAb`,
                                layoutId: `jusakTeAb`,
                                style: { width: `100%` },
                                variant: Y(`MQ15Am0Ey`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        W() &&
                          o(A, {
                            height: 400,
                            width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                            y:
                              (m?.y || 0) +
                              96 +
                              (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                              0 +
                              416,
                            ...K(
                              {
                                k3M_hxZM6: {
                                  width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    80 +
                                    (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                    0 +
                                    1662,
                                },
                                rko0nvupU: {
                                  width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                  y:
                                    (m?.y || 0) +
                                    80 +
                                    (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                    0 +
                                    831,
                                },
                              },
                              P,
                              F
                            ),
                            children: o(g, {
                              className: `framer-oxvuc3-container`,
                              layoutDependency: L,
                              layoutId: `w64yxUqPR-container`,
                              nodeId: `w64yxUqPR`,
                              rendersWithMotion: !0,
                              scopeId: `MRhy6J9LM`,
                              children: o(be, {
                                cYMryRtIV: Z(
                                  {
                                    pixelHeight: 1024,
                                    pixelWidth: 1536,
                                    src: `../../assets/images/nnLQVShNzbForLuFi7vJmWV6tcI.png?width=1536&height=1024`,
                                    srcSet: `../../assets/images/nnLQVShNzbForLuFi7vJmWV6tcI.png 512w,../../assets/images/nnLQVShNzbForLuFi7vJmWV6tcI.png?scale-down-to=1024&width=1536&height=1024 1024w,../../assets/images/nnLQVShNzbForLuFi7vJmWV6tcI.png?width=1536&height=1024 1536w`,
                                  },
                                  ``
                                ),
                                height: `100%`,
                                id: `w64yxUqPR`,
                                layoutId: `w64yxUqPR`,
                                style: { width: `100%` },
                                variant: Y(`wTD402b1H`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        W() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `E5aYY2PXA` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `E5aYY2PXA` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `E5aYY2PXA` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 400,
                                width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                y:
                                  (m?.y || 0) +
                                  96 +
                                  (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                                  0 +
                                  416,
                                ...K(
                                  {
                                    k3M_hxZM6: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                        0 +
                                        2078,
                                    },
                                    rko0nvupU: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                        0 +
                                        831,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(g, {
                                  className: `framer-bz08ou-container`,
                                  layoutDependency: L,
                                  layoutId: `TUW6VvgxF-container`,
                                  nodeId: `TUW6VvgxF`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(we, {
                                    Cj0zf9d81: `HAMMERS`,
                                    cYMryRtIV: Z(
                                      {
                                        pixelHeight: 3456,
                                        pixelWidth: 5184,
                                        src: `../../assets/images/Y1YR2AZ7qTDJhm25ldfSwKrJZLA.jpg?width=5184&height=3456`,
                                        srcSet: `../../assets/images/Y1YR2AZ7qTDJhm25ldfSwKrJZLA.jpg 512w,../../assets/images/Y1YR2AZ7qTDJhm25ldfSwKrJZLA.jpg?scale-down-to=1024&width=5184&height=3456 1024w,../../assets/images/Y1YR2AZ7qTDJhm25ldfSwKrJZLA.jpg?scale-down-to=2048&width=5184&height=3456 2048w,../../assets/images/Y1YR2AZ7qTDJhm25ldfSwKrJZLA.jpg?scale-down-to=4096&width=5184&height=3456 4096w,../../assets/images/Y1YR2AZ7qTDJhm25ldfSwKrJZLA.jpg?width=5184&height=3456 5184w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `TUW6VvgxF`,
                                    layoutId: `TUW6VvgxF`,
                                    R87kHUOMK: e[0],
                                    style: { width: `100%` },
                                    width: `100%`,
                                    ...K(
                                      {
                                        k3M_hxZM6: { R87kHUOMK: e[2] },
                                        rko0nvupU: { R87kHUOMK: e[1] },
                                      },
                                      P,
                                      F
                                    ),
                                  }),
                                }),
                              }),
                          }),
                        W() &&
                          o(S, {
                            links: [
                              { href: { webPageId: `Ho1BNoNAX` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `Ho1BNoNAX` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `Ho1BNoNAX` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              o(A, {
                                height: 400,
                                width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                y:
                                  (m?.y || 0) +
                                  96 +
                                  (((m?.height || 1663) - 192 - 1470.4) / 2 + 198.4 + 40) +
                                  0 +
                                  832,
                                ...K(
                                  {
                                    k3M_hxZM6: {
                                      width: `max(${m?.width || `100vw`} - 80px, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 3290) - 160 - 3129.4) / 2 + 198.4 + 37) +
                                        0 +
                                        2494,
                                    },
                                    rko0nvupU: {
                                      width: `max((${m?.width || `100vw`} - 116px) / 2, 50px)`,
                                      y:
                                        (m?.y || 0) +
                                        80 +
                                        (((m?.height || 2046) - 160 - 1885.4) / 2 + 198.4 + 40) +
                                        0 +
                                        1247,
                                    },
                                  },
                                  P,
                                  F
                                ),
                                children: o(g, {
                                  className: `framer-1xiahe2-container`,
                                  layoutDependency: L,
                                  layoutId: `KudhOIkjM-container`,
                                  nodeId: `KudhOIkjM`,
                                  rendersWithMotion: !0,
                                  scopeId: `MRhy6J9LM`,
                                  children: o(we, {
                                    Cj0zf9d81: `OTHERS`,
                                    cYMryRtIV: Z(
                                      {
                                        pixelHeight: 4599,
                                        pixelWidth: 5663,
                                        src: `../../assets/images/nLKUmsyvVeSjcF1haVqsHaUHew.jpg?width=5663&height=4599`,
                                        srcSet: `../../assets/images/nLKUmsyvVeSjcF1haVqsHaUHew.jpg 512w,../../assets/images/nLKUmsyvVeSjcF1haVqsHaUHew.jpg?scale-down-to=1024&width=5663&height=4599 1024w,../../assets/images/nLKUmsyvVeSjcF1haVqsHaUHew.jpg?scale-down-to=2048&width=5663&height=4599 2048w,../../assets/images/nLKUmsyvVeSjcF1haVqsHaUHew.jpg?scale-down-to=4096&width=5663&height=4599 4096w,../../assets/images/nLKUmsyvVeSjcF1haVqsHaUHew.jpg?width=5663&height=4599 5663w`,
                                      },
                                      ``
                                    ),
                                    height: `100%`,
                                    id: `KudhOIkjM`,
                                    layoutId: `KudhOIkjM`,
                                    R87kHUOMK: e[0],
                                    style: { width: `100%` },
                                    width: `100%`,
                                    ...K(
                                      {
                                        k3M_hxZM6: { R87kHUOMK: e[2] },
                                        rko0nvupU: { R87kHUOMK: e[1] },
                                      },
                                      P,
                                      F
                                    ),
                                  }),
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
          `.framer-3MNub.framer-1h7vasl, .framer-3MNub .framer-1h7vasl { display: block; }`,
          `.framer-3MNub.framer-2i1scq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 50px 96px 50px; position: relative; width: 1128px; }`,
          `.framer-3MNub .framer-1ul4373 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 310px; }`,
          `.framer-3MNub .framer-1jqgedo, .framer-3MNub .framer-k6vlis { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-3MNub .framer-r3zu2m, .framer-3MNub .framer-4ctgzc { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-3MNub .framer-145iamo-container, .framer-3MNub .framer-t7h1hl-container, .framer-3MNub .framer-1565jar-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-3MNub .framer-2vxkkg, .framer-3MNub .framer-1sayn6q, .framer-3MNub .framer-1f2l5jp { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-3MNub .framer-19xgl5q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 705px; }`,
          `.framer-3MNub .framer-fmj29g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3MNub .framer-18clrk4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3MNub .framer-bek3tr-container { flex: none; height: 100px; position: relative; width: 339px; }`,
          `.framer-3MNub .framer-fvof56 { height: 50px; overflow: visible; position: relative; width: 50px; }`,
          `.framer-3MNub .framer-1r9z3fw { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
          `.framer-3MNub .framer-mpshz7 { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 80px; }`,
          `.framer-3MNub .framer-4gyir0 { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
          `.framer-3MNub .framer-ch5zk3 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3MNub .framer-w3mpr2-container, .framer-3MNub .framer-ix7t16-container, .framer-3MNub .framer-xpxbwp-container, .framer-3MNub .framer-ljouub-container, .framer-3MNub .framer-2cs2vm-container, .framer-3MNub .framer-v4momh-container, .framer-3MNub .framer-syyj0f-container, .framer-3MNub .framer-1sgcp9g-container, .framer-3MNub .framer-pbhh99-container, .framer-3MNub .framer-1spsooc-container { align-self: start; flex: none; height: 399px; justify-self: start; position: relative; width: 100%; }`,
          `.framer-3MNub .framer-1gi2cx8-container, .framer-3MNub .framer-3g6c81-container, .framer-3MNub .framer-1pw4j30-container, .framer-3MNub .framer-1e7vl27-container, .framer-3MNub .framer-pm50u5-container, .framer-3MNub .framer-m3wjj6-container, .framer-3MNub .framer-4kz05j-container, .framer-3MNub .framer-1r4nucw-container, .framer-3MNub .framer-nvvyvp-container, .framer-3MNub .framer-oxvuc3-container, .framer-3MNub .framer-bz08ou-container, .framer-3MNub .framer-1xiahe2-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
          `.framer-3MNub .framer-g0jhup-container, .framer-3MNub .framer-1jon8yb-container, .framer-3MNub .framer-okk0xo-container, .framer-3MNub .framer-p2l43x-container, .framer-3MNub .framer-apxivr-container, .framer-3MNub .framer-1vzd0wi-container, .framer-3MNub .framer-1t88is8-container, .framer-3MNub .framer-yqg8na-container { align-self: start; flex: none; grid-column: span 2; height: 399px; justify-self: start; position: relative; width: 100%; }`,
          `.framer-3MNub.framer-v-1qmy97m.framer-2i1scq, .framer-3MNub.framer-v-1pryv5x.framer-2i1scq, .framer-3MNub.framer-v-af2187.framer-2i1scq { padding: 80px 50px 80px 50px; width: 810px; }`,
          `.framer-3MNub.framer-v-1qmy97m .framer-ch5zk3, .framer-3MNub.framer-v-1pryv5x .framer-ch5zk3, .framer-3MNub.framer-v-af2187 .framer-ch5zk3 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }`,
          `.framer-3MNub.framer-v-568sqb.framer-2i1scq { gap: 37px; padding: 80px 40px 80px 40px; width: 390px; }`,
          `.framer-3MNub.framer-v-568sqb .framer-bek3tr-container { width: 307px; }`,
          `.framer-3MNub.framer-v-568sqb .framer-ch5zk3, .framer-3MNub.framer-v-irr39h .framer-ch5zk3, .framer-3MNub.framer-v-1c0fvl8 .framer-ch5zk3 { grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
          `.framer-3MNub.framer-v-irr39h.framer-2i1scq { padding: 80px 16px 80px 16px; width: 390px; }`,
          `.framer-3MNub.framer-v-1c0fvl8.framer-2i1scq { padding: 80px 40px 80px 40px; width: 390px; }`,
          `.framer-3MNub.framer-v-1c0fvl8 .framer-ix7t16-container, .framer-3MNub.framer-v-1c0fvl8 .framer-g0jhup-container, .framer-3MNub.framer-v-1c0fvl8 .framer-1jon8yb-container, .framer-3MNub.framer-v-1c0fvl8 .framer-okk0xo-container, .framer-3MNub.framer-v-1c0fvl8 .framer-p2l43x-container, .framer-3MNub.framer-v-1c0fvl8 .framer-apxivr-container, .framer-3MNub.framer-v-1c0fvl8 .framer-1vzd0wi-container, .framer-3MNub.framer-v-1c0fvl8 .framer-1t88is8-container, .framer-3MNub.framer-v-1c0fvl8 .framer-yqg8na-container { grid-column: span 1; }`,
          ...pe,
        ],
        `framer-3MNub`
      )),
      (Q.displayName = `Products`),
      (Q.defaultProps = { height: 1663, width: 1128 }),
      b(Q, {
        variant: {
          options: [
            `kIdsWxA43`,
            `rko0nvupU`,
            `k3M_hxZM6`,
            `y7Fv0SwBt`,
            `HQ28mprTM`,
            `roFKZtMdp`,
            `vUiriS6iA`,
            `OczwEJV4b`,
            `NQxdwbdbs`,
            `pVEDpiRqf`,
            `xMUkb7mdX`,
          ],
          optionTitles: [
            `Desktop`,
            `Tablet`,
            `Phone`,
            `Power tools desktop`,
            `Measuring and digital meters desktop`,
            `Measuring and digital meters tablets`,
            `Measuring and digital meters phone`,
            `Variant 8`,
            `Variant 9`,
            `Hand Tools others Tablet`,
            `Hand Tools others phone`,
          ],
          title: `Variant`,
          type: k.Enum,
        },
        BQZ0haarw: { title: `Click`, type: k.EventHandler },
        rUPZqhUgR: { title: `Click 2`, type: k.EventHandler },
        wUzdR4KlJ: {
          defaultValue: `MEASURING METERS`,
          displayTextArea: !1,
          title: `Title 2`,
          type: k.String,
        },
        onwUzdR4KlJChange: { changes: `wUzdR4KlJ`, type: k.ChangeHandler },
        DKR6UgLH7: {
          defaultValue: `Digital and Measuring meters`,
          displayTextArea: !1,
          title: `Title 5`,
          type: k.String,
        },
        onDKR6UgLH7Change: { changes: `DKR6UgLH7`, type: k.ChangeHandler },
        IGNsFW842: { defaultValue: `Products`, displayTextArea: !1, title: `Text`, type: k.String },
        onIGNsFW842Change: { changes: `IGNsFW842`, type: k.ChangeHandler },
        l8mDH5I68: {
          defaultValue: `DIGITAL METERS`,
          displayTextArea: !1,
          title: `Title 7`,
          type: k.String,
        },
        onl8mDH5I68Change: { changes: `l8mDH5I68`, type: k.ChangeHandler },
        sTnpSD0NL: { title: `Internal Card 2`, type: k.Link },
        SdP7L1icC: { title: `Internal Card 3`, type: k.Link },
        T5FqHC2SZ: {
          defaultValue: `MEASURING METERS`,
          displayTextArea: !1,
          title: `Title 8`,
          type: k.String,
        },
        onT5FqHC2SZChange: { changes: `T5FqHC2SZ`, type: k.ChangeHandler },
        pav9EhmdT: {
          defaultValue: `Measuring & Digital Meters`,
          displayTextArea: !1,
          title: `Title 9`,
          type: k.String,
        },
        onpav9EhmdTChange: { changes: `pav9EhmdT`, type: k.ChangeHandler },
        ECRa6tI8e: {
          defaultValue: `MEASURING METERS`,
          displayTextArea: !1,
          title: `Title 10`,
          type: k.String,
        },
        onECRa6tI8eChange: { changes: `ECRa6tI8e`, type: k.ChangeHandler },
        TSkWkWiUk: {
          defaultValue: `Measuring & Digital Meters`,
          displayTextArea: !1,
          title: `Title 11`,
          type: k.String,
        },
        onTSkWkWiUkChange: { changes: `TSkWkWiUk`, type: k.ChangeHandler },
        aQ8TwzSX5: { title: `Internal Card 5`, type: k.Link },
      }),
      N(
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
          ...Le,
          ...Re,
          ...Be,
          ...Ve,
          ...He,
          ...Ue,
          ...We,
          ...Ge,
          ...Ke,
          ...ee(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([
            h(I, {}, t),
            h(B, {}, t),
            h(R, {}, t),
            h(G, {}, t),
            h(Te, {}, t),
            h(be, {}, t),
            h(we, {}, t),
          ])
        ),
      }));
  }),
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  $,
  mt;
e(() => {
  (s(),
    x(),
    m(),
    u(),
    rt(),
    V(),
    (it = _(Q)),
    (at = {
      azQBpfqS0: `(min-width: 1200px)`,
      U8iWSsl60: `(min-width: 810px) and (max-width: 1199.98px)`,
      ysA8IXDJo: `(max-width: 809.98px)`,
    }),
    (ot = []),
    (st = `framer-klhwl`),
    (ct = {
      azQBpfqS0: `framer-v-1x1b91y`,
      U8iWSsl60: `framer-v-1g04z90`,
      ysA8IXDJo: `framer-v-2jn81h`,
    }),
    (lt = (e, t, n) => (e && t ? `position` : n)),
    (ut = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (dt = { Desktop: `azQBpfqS0`, Phone: `ysA8IXDJo`, Tablet: `U8iWSsl60` }),
    (ft = ({ value: e }) =>
      oe()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (pt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: dt[r.variant] ?? r.variant ?? `azQBpfqS0`,
    })),
    ($ = E(
      i(function (e, r) {
        let i = n(null),
          s = r ?? i,
          u = l(),
          { activeLocale: m, setLocale: h } = ce(),
          g = ae(),
          { style: _, className: ee, layoutId: y, variant: b, ...x } = pt(e);
        ne(a(() => Ee({}, m), [m]));
        let [S, re] = te(b, at, !1),
          T = v(st),
          E = t(C)?.isLayoutTemplate,
          oe = !!t(f)?.transition?.layout,
          O = lt(E, oe),
          se = M(`RxWODMFLp`),
          k = n(null);
        return (
          ie({}),
          o(C.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: dt,
              primaryVariantId: `azQBpfqS0`,
              variantClassNames: ct,
            },
            children: c(p, {
              id: y ?? u,
              children: [
                o(ft, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...x,
                  className: v(T, `framer-1x1b91y`, ee),
                  ref: s,
                  style: { ..._ },
                  children: o(A, {
                    height: 1663,
                    width: `min(${g?.width || `100vw`}, ${g?.width || `100vw`} * 11.28)`,
                    y: (g?.y || 0) + 0 + 0,
                    children: o(D, {
                      className: `framer-1fbbjag-container`,
                      id: se,
                      layout: O,
                      nodeId: `RxWODMFLp`,
                      ref: k,
                      scopeId: `Pinumpnx5`,
                      children: o(w, {
                        breakpoint: S,
                        overrides: {
                          U8iWSsl60: { variant: ut(`rko0nvupU`) },
                          ysA8IXDJo: { variant: ut(`k3M_hxZM6`) },
                        },
                        children: o(Q, {
                          DKR6UgLH7: `Digital and Measuring meters`,
                          ECRa6tI8e: `MEASURING METERS`,
                          height: `100%`,
                          id: `RxWODMFLp`,
                          IGNsFW842: `Products`,
                          l8mDH5I68: `DIGITAL METERS`,
                          layoutId: `RxWODMFLp`,
                          pav9EhmdT: `Measuring & Digital Meters`,
                          style: { maxWidth: `100%`, width: `100%` },
                          T5FqHC2SZ: `MEASURING METERS`,
                          TSkWkWiUk: `Measuring & Digital Meters`,
                          variant: ut(`kIdsWxA43`),
                          width: `100%`,
                          wUzdR4KlJ: `MEASURING METERS`,
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
        `.framer-klhwl.framer-yx47dk, .framer-klhwl .framer-yx47dk { display: block; }`,
        `.framer-klhwl.framer-1x1b91y { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-klhwl .framer-1fbbjag-container { flex: none; height: auto; max-width: 1128%; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-klhwl.framer-1x1b91y { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-klhwl.framer-1x1b91y { width: 390px; }}`,
      ],
      `framer-klhwl`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 2071, width: 1200 }),
    N($, [{ explicitInter: !0, fonts: [] }, ...it], { supportsExplicitInterCodegen: !0 }),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([h(Q, {}, t)])) }),
    (mt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerPinumpnx5`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `2071`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"U8iWSsl60":{"layout":["fixed","auto"]},"ysA8IXDJo":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `{"RxWODMFLp":{"pattern":":RxWODMFLp","name":"classes"}}`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { mt as __FramerMetadata__, $ as default, ot as queryParamNames };
//# sourceMappingURL=TX0dNq8NdWbl3id591Z15S9m0GHtScYTOyDkQf9iVf8.Ch45iGyz.mjs.map
