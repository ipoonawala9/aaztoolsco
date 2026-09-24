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
  ft as x,
  ht as S,
  mt as C,
  nt as w,
  p as T,
  pt as E,
  r as D,
  st as O,
  t as ee,
  tt as te,
  u as k,
  w as A,
  x as j,
} from "./framer.w0XhpZTx.mjs";
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z = e(() => {
    (s(),
      b(),
      u(),
      (M = `var(--framer-icon-mask)`),
      (N = i(function (e, t) {
        return o(`svg`, { ...e, ref: t, children: e.children });
      })),
      (P = d.create(N)),
      (F = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? o(P, { ...a, layoutId: r, ref: t, children: i })
          : o(`svg`, { ...a, ref: t, children: i });
      })),
      (I = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.5 0 L 0 5.25 L 5.5 10.5" fill="transparent" height="10.5px" id="qjdrtIpc7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="A7wAxaPFZ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(5 12)" width="14.25px"/></svg>`),
      (L = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (R = C(
        i(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: s,
              lKf_CQTz5: c,
              BKVe8Pgvw: l,
              ...u
            } = L(e),
            d = x(`156361677`, I);
          return o(F, {
            ...u,
            className: _(`framer-Yela7`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": c, "--18mrqx2": s, ...n },
            viewBox: `0 0 24 24`,
            children: o(`use`, { href: d }),
          });
        }),
        [
          `.framer-Yela7 { -webkit-mask: ${M}; aspect-ratio: 1; display: block; mask: ${M}; width: 24px; }`,
        ],
        `framer-Yela7`
      )),
      (R.displayName = `Arrow Left`),
      y(R, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: D.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: D.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: D.Number,
        },
      }));
  }),
  B,
  V,
  H,
  U,
  W = e(() => {
    (s(),
      b(),
      u(),
      (B = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 0 12" fill="transparent" height="12px" id="JuEqmLwI0" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(6 6)" width="12px"/><path d="M 0 0 L 12 12" fill="transparent" height="12px" id="aEN6gG6Cz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--43q7um, rgb(0,0,0))" transform="translate(6 6)" width="12px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (V = i((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? o(d.div, { ...a, layoutId: r, ref: t }) : o(`div`, { ...a, ref: t });
      })),
      (H = ({ height: e, id: t, stroke: n, width: r, ...i }) => ({
        ...i,
        UO5clYVeQ: n ?? i.UO5clYVeQ ?? `rgb(0, 0, 0)`,
      })),
      (U = C(
        i(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, UO5clYVeQ: s, ...c } = H(e);
          return o(V, {
            ...c,
            className: _(`framer-Howa8`, r),
            layoutId: i,
            ref: t,
            style: { "--43q7um": s, ...n },
          });
        }),
        [
          `.framer-Howa8 { -webkit-mask: ${B}; aspect-ratio: 1; background-color: var(--43q7um); mask: ${B}; width: 24px; }`,
        ],
        `framer-Howa8`
      )),
      (U.displayName = `X`),
      y(U, {
        UO5clYVeQ: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: D.Color },
      }));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var K,
  ne,
  q,
  J,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  Y,
  pe = e(() => {
    (s(),
      b(),
      m(),
      u(),
      (K = S(d.div)),
      (ne = { Y6CHTJJM0: { hover: !0, pressed: !0 } }),
      (q = [`Y6CHTJJM0`, `n9wSMJDiA`, `wSrZ4TzsA`, `XKSibd1Ne`, `VsD7nHHyR`]),
      (J = `framer-zzaV6`),
      (re = {
        n9wSMJDiA: `framer-v-160s26c`,
        VsD7nHHyR: `framer-v-1vy0psc`,
        wSrZ4TzsA: `framer-v-u54yhu`,
        XKSibd1Ne: `framer-v-ax66s`,
        Y6CHTJJM0: `framer-v-kxbeu4`,
      }),
      (ie = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ae = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (oe = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (se = (e, t) => `translateX(-50%) ${t}`),
      (ce = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (le = d.create(r)),
      (ue = {
        Default: `Y6CHTJJM0`,
        Disabled: `wSrZ4TzsA`,
        Error: `VsD7nHHyR`,
        Loading: `n9wSMJDiA`,
        Success: `XKSibd1Ne`,
      }),
      (de = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ue[r.variant] ?? r.variant ?? `Y6CHTJJM0`,
      })),
      (fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = C(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = O();
          w();
          let { style: m, className: h, layoutId: g, variant: v, ...y } = de(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: T,
              isLoading: D,
              setGestureState: ee,
              setVariant: te,
              variants: k,
            } = E({
              cycleOrder: q,
              defaultVariant: `Y6CHTJJM0`,
              enabledGestures: ne,
              ref: a,
              variant: v,
              variantClassNames: re,
            }),
            A = fe(e, k),
            M = _(J),
            N = () => b !== `n9wSMJDiA`,
            P = () => b === `n9wSMJDiA`;
          return o(p, {
            id: g ?? s,
            children: o(le, {
              animate: k,
              initial: !1,
              children: o(ce, {
                value: ie,
                children: c(d.button, {
                  ...y,
                  ...C,
                  className: _(M, `framer-kxbeu4`, h, x),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: A,
                  layoutId: `Y6CHTJJM0`,
                  ref: a,
                  style: {
                    backgroundColor: `rgb(51, 51, 51)`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "Y6CHTJJM0-hover": { backgroundColor: `rgba(51, 51, 51, 0.85)`, opacity: 1 },
                    "Y6CHTJJM0-pressed": { backgroundColor: `rgb(158, 158, 158)`, opacity: 1 },
                    VsD7nHHyR: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    wSrZ4TzsA: { opacity: 0.5 },
                    XKSibd1Ne: { opacity: 1 },
                  },
                  ...G(
                    {
                      "Y6CHTJJM0-hover": { "data-framer-name": void 0 },
                      "Y6CHTJJM0-pressed": { "data-framer-name": void 0 },
                      n9wSMJDiA: { "data-framer-name": `Loading` },
                      VsD7nHHyR: { "data-framer-name": `Error` },
                      wSrZ4TzsA: { "data-framer-name": `Disabled` },
                      XKSibd1Ne: { "data-framer-name": `Success` },
                    },
                    b,
                    T
                  ),
                  children: [
                    N() &&
                      o(j, {
                        __fromCanvasComponent: !0,
                        children: o(r, {
                          children: o(d.p, {
                            style: {
                              "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                              "--framer-font-size": `14px`,
                              "--framer-font-weight": `600`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                            },
                            children: `Submit`,
                          }),
                        }),
                        className: `framer-1szduhw`,
                        fonts: [`Inter-SemiBold`],
                        layoutDependency: A,
                        layoutId: `vnV2EGmli`,
                        style: {
                          "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: { VsD7nHHyR: { "--extracted-r6o4lv": `rgb(255, 34, 68)` } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...G(
                          {
                            VsD7nHHyR: {
                              children: o(r, {
                                children: o(d.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                            XKSibd1Ne: {
                              children: o(r, {
                                children: o(d.p, {
                                  style: {
                                    "--font-selector": `SW50ZXItU2VtaUJvbGQ=`,
                                    "--framer-font-size": `14px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `Thank you`,
                                }),
                              }),
                            },
                          },
                          b,
                          T
                        ),
                      }),
                    P() &&
                      o(d.div, {
                        className: `framer-48xth7`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: A,
                        layoutId: `AD5b6FdM6`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: o(K, {
                          __framer__loop: oe,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: ae,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1gxpuvp`,
                          "data-framer-name": `Conic`,
                          layoutDependency: A,
                          layoutId: `TrCQS4X4U`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            n9wSMJDiA: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: o(d.div, {
                            className: `framer-8y8jrf`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: A,
                            layoutId: `HGAbxCimr`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: se,
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
          `.framer-zzaV6.framer-1bg7d97, .framer-zzaV6 .framer-1bg7d97 { display: block; }`,
          `.framer-zzaV6.framer-kxbeu4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }`,
          `.framer-zzaV6 .framer-1szduhw { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-zzaV6 .framer-48xth7 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-zzaV6 .framer-1gxpuvp { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-zzaV6 .framer-8y8jrf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-zzaV6.framer-v-160s26c.framer-kxbeu4, .framer-zzaV6.framer-v-u54yhu.framer-kxbeu4, .framer-zzaV6.framer-v-ax66s.framer-kxbeu4, .framer-zzaV6.framer-v-1vy0psc.framer-kxbeu4 { cursor: unset; }`,
          `.framer-zzaV6.framer-v-160s26c .framer-1gxpuvp { overflow: hidden; }`,
        ],
        `framer-zzaV6`
      )),
      (Y.displayName = `Button 5`),
      (Y.defaultProps = { height: 40, width: 240 }),
      y(Y, {
        variant: {
          options: [`Y6CHTJJM0`, `n9wSMJDiA`, `wSrZ4TzsA`, `XKSibd1Ne`, `VsD7nHHyR`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: D.Enum,
        },
      }),
      A(
        Y,
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
                url: `https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `https://framerusercontent.com/assets/yDtI2UI8XcEg1W2je9XPN3Noo.woff2`,
                weight: `600`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function me(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  X,
  Te = e(() => {
    (s(),
      b(),
      m(),
      u(),
      (he = {
        AFUxFvTwX: { hover: !0, pressed: !0 },
        oomPo9s_4: { hover: !0 },
        Smts1Akg9: { hover: !0 },
        soB_6GGPU: { hover: !0 },
        vD79wQTj1: { hover: !0 },
      }),
      (ge = [`vD79wQTj1`, `Smts1Akg9`, `soB_6GGPU`, `AFUxFvTwX`, `oomPo9s_4`]),
      (_e = `framer-AF1Se`),
      (ve = {
        AFUxFvTwX: `framer-v-imnl9j`,
        oomPo9s_4: `framer-v-1ukjry7`,
        Smts1Akg9: `framer-v-qb6lpq`,
        soB_6GGPU: `framer-v-1i079s6`,
        vD79wQTj1: `framer-v-xqex1`,
      }),
      (ye = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (be = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (xe = d.create(r)),
      (Se = {
        "Line button": `soB_6GGPU`,
        "Small Vairant": `Smts1Akg9`,
        "White Button": `oomPo9s_4`,
        Default: `vD79wQTj1`,
        Large: `AFUxFvTwX`,
      }),
      (Ce = ({
        buttonLabel: e,
        click: t,
        height: n,
        hover: r,
        hover2: i,
        id: a,
        link: o,
        width: s,
        ...c
      }) => ({
        ...c,
        HmyXhQNqx: o ?? c.HmyXhQNqx,
        I69eZGBit: r ?? c.I69eZGBit,
        md7joVNIr: t ?? c.md7joVNIr,
        PuJJv4mcP: e ?? c.PuJJv4mcP ?? `Contact us`,
        variant: Se[c.variant] ?? c.variant ?? `vD79wQTj1`,
        vYWI2rn_G: i ?? c.vYWI2rn_G,
      })),
      (we = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: c, setLocale: u } = O();
          w();
          let {
              style: f,
              className: m,
              layoutId: h,
              variant: g,
              PuJJv4mcP: v,
              I69eZGBit: y,
              md7joVNIr: b,
              HmyXhQNqx: x,
              vYWI2rn_G: S,
              ...C
            } = Ce(e),
            {
              baseVariant: D,
              classNames: ee,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = E({
              cycleOrder: ge,
              defaultVariant: `vD79wQTj1`,
              enabledGestures: he,
              ref: a,
              variant: g,
              variantClassNames: ve,
            }),
            L = we(e, I),
            { activeVariantCallback: R, delay: z } = te(D),
            B = R(async (...e) => {
              if ((P({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            V = R(async (...e) => {
              if (
                (P({ isHovered: !0 }),
                (y && (await y(...e)) === !1) || (S && (await S(...e)) === !1))
              )
                return !1;
            }),
            H = _(_e);
          return o(p, {
            id: h ?? s,
            children: o(xe, {
              animate: I,
              initial: !1,
              children: o(be, {
                value: ye,
                children: o(T, {
                  href: x,
                  motionChild: !0,
                  nodeId: `vD79wQTj1`,
                  openInNewTab: !1,
                  scopeId: `WYmF9mN9S`,
                  children: o(d.a, {
                    ...C,
                    ...A,
                    className: `${_(H, `framer-xqex1`, m, ee)} framer-1aks1db`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: L,
                    layoutId: `vD79wQTj1`,
                    onMouseEnter: V,
                    onTap: B,
                    ref: a,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgb(45, 53, 138)`,
                      ...f,
                    },
                    variants: {
                      "AFUxFvTwX-hover": {
                        backgroundColor: `var(--token-9582960f-05f7-42bf-a547-39d02e26bd72, rgb(0, 0, 0))`,
                      },
                      "AFUxFvTwX-pressed": { backgroundColor: `rgb(57, 62, 112)` },
                      "oomPo9s_4-hover": { backgroundColor: `rgb(0, 0, 0)` },
                      "Smts1Akg9-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(45, 53, 138, 0.78)`,
                      },
                      "soB_6GGPU-hover": {
                        "--border-color": `rgba(45, 53, 138, 0)`,
                        backgroundColor: `rgb(247, 247, 247)`,
                      },
                      "vD79wQTj1-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      AFUxFvTwX: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      oomPo9s_4: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      soB_6GGPU: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(45, 53, 138, 0.76)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                    },
                    ...me(
                      {
                        "AFUxFvTwX-hover": { "data-framer-name": void 0 },
                        "AFUxFvTwX-pressed": { "data-framer-name": void 0 },
                        "oomPo9s_4-hover": { "data-framer-name": void 0 },
                        "Smts1Akg9-hover": { "data-framer-name": void 0 },
                        "soB_6GGPU-hover": { "data-framer-name": void 0 },
                        "vD79wQTj1-hover": { "data-framer-name": void 0 },
                        AFUxFvTwX: { "data-framer-name": `Large` },
                        oomPo9s_4: { "data-framer-name": `White Button` },
                        Smts1Akg9: { "data-framer-name": `Small Vairant` },
                        soB_6GGPU: { "data-border": !0, "data-framer-name": `Line button` },
                      },
                      D,
                      M
                    ),
                    children: o(j, {
                      __fromCanvasComponent: !0,
                      children: o(r, {
                        children: o(d.p, {
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
                      className: `framer-13k08uo`,
                      fonts: [`Inter-Medium`],
                      layoutDependency: L,
                      layoutId: `dN1H9Rslz`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: v,
                      variants: {
                        AFUxFvTwX: { "--extracted-1w1cjl5": `rgb(255, 255, 255)` },
                        soB_6GGPU: { "--extracted-r6o4lv": `rgb(45, 53, 138)` },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...me(
                        {
                          "oomPo9s_4-hover": {
                            children: o(r, {
                              children: o(d.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `20px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.02em`,
                                  "--framer-line-height": `1.6em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Contact us`,
                              }),
                            }),
                          },
                          AFUxFvTwX: {
                            children: o(r, {
                              children: o(d.h6, {
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
                          oomPo9s_4: {
                            children: o(r, {
                              children: o(d.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `20px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.02em`,
                                  "--framer-line-height": `1.6em`,
                                },
                                children: `Contact us`,
                              }),
                            }),
                          },
                          soB_6GGPU: {
                            children: o(r, {
                              children: o(d.p, {
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
                        D,
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
          `.framer-AF1Se.framer-1aks1db, .framer-AF1Se .framer-1aks1db { display: block; }`,
          `.framer-AF1Se.framer-xqex1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-AF1Se .framer-13k08uo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-AF1Se.framer-v-qb6lpq.framer-xqex1 { padding: 10px 20px 10px 20px; }`,
          `.framer-AF1Se.framer-v-imnl9j.framer-xqex1 { padding: 20px 42px 20px 42px; }`,
          `.framer-AF1Se[data-border="true"]::after, .framer-AF1Se [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-AF1Se`
      )),
      (X.displayName = `Button 4`),
      (X.defaultProps = { height: 46, width: 118 }),
      y(X, {
        variant: {
          options: [`vD79wQTj1`, `Smts1Akg9`, `soB_6GGPU`, `AFUxFvTwX`, `oomPo9s_4`],
          optionTitles: [`Default`, `Small Vairant`, `Line button`, `Large`, `White Button`],
          title: `Variant`,
          type: D.Enum,
        },
        PuJJv4mcP: {
          defaultValue: `Contact us`,
          displayTextArea: !1,
          title: `Button Label`,
          type: D.String,
        },
        I69eZGBit: { title: `Hover`, type: D.EventHandler },
        md7joVNIr: { title: `Click`, type: D.EventHandler },
        HmyXhQNqx: { title: `Link`, type: D.Link },
        vYWI2rn_G: { title: `Hover 2`, type: D.EventHandler },
      }),
      A(
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
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Q,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  $,
  Le = e(() => {
    (s(),
      b(),
      m(),
      u(),
      z(),
      Te(),
      (Ee = g(X)),
      (De = g(R)),
      (Oe = [`e8KDx5Yru`, `K_ycYaEcQ`, `Ycus71RuH`]),
      (ke = `framer-ivL90`),
      (Ae = {
        e8KDx5Yru: `framer-v-frjomx`,
        K_ycYaEcQ: `framer-v-ql2pbu`,
        Ycus71RuH: `framer-v-1hlstzp`,
      }),
      (je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Me = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (Ne = d.create(r)),
      (Pe = { "Variant 3": `Ycus71RuH`, Desktop: `e8KDx5Yru`, Phone: `K_ycYaEcQ` }),
      (Fe = ({
        description: e,
        height: t,
        id: n,
        image2: r,
        link: i,
        overlay: a,
        title: o,
        title2: s,
        width: c,
        ...l
      }) => ({
        ...l,
        C6KVezXmF: s ?? l.C6KVezXmF ?? `Hand tools`,
        foHHv2HKv: a ?? l.foHHv2HKv,
        hvDKqkZQw: r ??
          l.hvDKqkZQw ?? {
            pixelHeight: 1301,
            pixelWidth: 1800,
            src: `https://framerusercontent.com/images/htMZ8Tc76ctCDLADd08GUehD10M.png?width=1800&height=1301`,
            srcSet: `https://framerusercontent.com/images/htMZ8Tc76ctCDLADd08GUehD10M.png?scale-down-to=512&width=1800&height=1301 512w,https://framerusercontent.com/images/htMZ8Tc76ctCDLADd08GUehD10M.png?scale-down-to=1024&width=1800&height=1301 1024w,https://framerusercontent.com/images/htMZ8Tc76ctCDLADd08GUehD10M.png?width=1800&height=1301 1800w`,
          },
        NF5me_oRa:
          e ??
          l.NF5me_oRa ??
          `We work with leadership teams to craft clear, actionable strategies tailored to each organization’s unique challenges. From long-term vision to short-term execution plans, our approach ensures clarity, alignment, and sustainable growth. With our support, businesses gain a roadmap that balances ambition with practicality.`,
        variant: Pe[l.variant] ?? l.variant ?? `e8KDx5Yru`,
        YFKMY7d12: o ?? l.YFKMY7d12 ?? `Double Hand Spanner`,
        ZKclmvn_H: i ?? l.ZKclmvn_H,
      })),
      (Ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = C(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = O(),
            m = w(),
            {
              style: g,
              className: y,
              layoutId: b,
              variant: x,
              NF5me_oRa: S,
              hvDKqkZQw: C,
              YFKMY7d12: D,
              ZKclmvn_H: A,
              C6KVezXmF: M,
              foHHv2HKv: N,
              ...P
            } = Fe(e),
            {
              baseVariant: F,
              classNames: I,
              clearLoadingGesture: L,
              gestureHandlers: z,
              gestureVariant: B,
              isLoading: V,
              setGestureState: H,
              setVariant: U,
              variants: W,
            } = E({
              cycleOrder: Oe,
              defaultVariant: `e8KDx5Yru`,
              ref: a,
              variant: x,
              variantClassNames: Ae,
            }),
            G = Ie(e, W),
            { activeVariantCallback: K, delay: ne } = te(F),
            q = K(async (...e) => {
              if (N && (await N(...e)) === !1) return !1;
            }),
            J = _(ke);
          return o(p, {
            id: b ?? s,
            children: o(Ne, {
              animate: W,
              initial: !1,
              children: o(Me, {
                value: je,
                children: c(d.div, {
                  ...P,
                  ...z,
                  className: _(J, `framer-frjomx`, y, I),
                  "data-framer-name": `Desktop`,
                  layoutDependency: G,
                  layoutId: `e8KDx5Yru`,
                  ref: a,
                  style: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    ...g,
                  },
                  ...Z(
                    {
                      K_ycYaEcQ: { "data-framer-name": `Phone` },
                      Ycus71RuH: { "data-framer-name": `Variant 3` },
                    },
                    F,
                    B
                  ),
                  children: [
                    o(d.div, {
                      className: `framer-gs9qlp`,
                      layoutDependency: G,
                      layoutId: `gLZIF0fxY`,
                    }),
                    o(k, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: v(
                          (m?.y || 0) +
                            (0 + ((m?.height || 441) - 0 - ((m?.height || 441) - 0) * 1) / 2)
                        ),
                        pixelHeight: 1301,
                        pixelWidth: 1800,
                        sizes: `450px`,
                        ...Q(C),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-14yp8sw`,
                      layoutDependency: G,
                      layoutId: `u7p_iF1wy`,
                      ...Z(
                        {
                          K_ycYaEcQ: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: v((m?.y || 0) + 0 + 0),
                              pixelHeight: 1301,
                              pixelWidth: 1800,
                              sizes: `300px`,
                              ...Q(C),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                          Ycus71RuH: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: v(
                                (m?.y || 0) +
                                  (0 + ((m?.height || 674) - 0 - ((m?.height || 674) - 0) * 1) / 2)
                              ),
                              pixelHeight: 1301,
                              pixelWidth: 1800,
                              sizes: `450px`,
                              ...Q(C),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        F,
                        B
                      ),
                    }),
                    c(d.div, {
                      className: `framer-1rtkcdd`,
                      "data-framer-name": `Content`,
                      layoutDependency: G,
                      layoutId: `DLy6eE27K`,
                      children: [
                        c(d.div, {
                          className: `framer-1vjat9l`,
                          layoutDependency: G,
                          layoutId: `Qss8byRQx`,
                          children: [
                            o(j, {
                              __fromCanvasComponent: !0,
                              children: o(r, {
                                children: o(d.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtMzAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-weight": `300`,
                                    "--framer-line-height": `1.6em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a07f9d7b-ed9b-4cd1-8585-e798ef0cc9db, rgb(37, 46, 61)))`,
                                  },
                                  children: `Hand tools`,
                                }),
                              }),
                              className: `framer-1dloqvs`,
                              "data-framer-name": `Title`,
                              fonts: [`GF;Geist-300`],
                              layoutDependency: G,
                              layoutId: `JJy3GxFly`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-a07f9d7b-ed9b-4cd1-8585-e798ef0cc9db, rgb(37, 46, 61))`,
                              },
                              text: M,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            o(j, {
                              __fromCanvasComponent: !0,
                              children: o(r, {
                                children: o(d.p, {
                                  style: {
                                    "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                    "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                    "--framer-font-size": `26px`,
                                    "--framer-font-weight": `600`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a07f9d7b-ed9b-4cd1-8585-e798ef0cc9db, rgb(37, 46, 61)))`,
                                  },
                                  children: `Double Hand Spanner`,
                                }),
                              }),
                              className: `framer-16zkcww`,
                              "data-framer-name": `Title`,
                              fonts: [`GF;Geist-600`],
                              layoutDependency: G,
                              layoutId: `Dt2J0iPSj`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-a07f9d7b-ed9b-4cd1-8585-e798ef0cc9db, rgb(37, 46, 61))`,
                              },
                              text: D,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        o(j, {
                          __fromCanvasComponent: !0,
                          children: o(r, {
                            children: o(d.p, {
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtMzAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `18px`,
                                "--framer-font-weight": `300`,
                                "--framer-line-height": `1.6em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a07f9d7b-ed9b-4cd1-8585-e798ef0cc9db, rgb(37, 46, 61)))`,
                              },
                              children: `We work with leadership teams to craft clear, actionable strategies tailored to each organization’s unique challenges. From long-term vision to short-term execution plans, our approach ensures clarity, alignment, and sustainable growth. With our support, businesses gain a roadmap that balances ambition with practicality.`,
                            }),
                          }),
                          className: `framer-nun2xb`,
                          "data-framer-name": `Description`,
                          fonts: [`GF;Geist-300`],
                          layoutDependency: G,
                          layoutId: `tBpFiKUjg`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-a07f9d7b-ed9b-4cd1-8585-e798ef0cc9db, rgb(37, 46, 61))`,
                          },
                          text: S,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(ee, {
                          height: 46,
                          y: (m?.y || 0) + (0 + ((m?.height || 441) - 0 - 668) / 2) + 40 + 488,
                          ...Z(
                            {
                              K_ycYaEcQ: { width: `97px`, y: (m?.y || 0) + 0 + 300 + 30 + 488 },
                              Ycus71RuH: {
                                y:
                                  (m?.y || 0) + (0 + ((m?.height || 674) - 0 - 668) / 2) + 40 + 488,
                              },
                            },
                            F,
                            B
                          ),
                          children: o(h, {
                            className: `framer-19pmgbb-container`,
                            layoutDependency: G,
                            layoutId: `S_5Yq52d4-container`,
                            nodeId: `S_5Yq52d4`,
                            rendersWithMotion: !0,
                            scopeId: `NnruO2Fqm`,
                            children: o(X, {
                              height: `100%`,
                              id: `S_5Yq52d4`,
                              layoutId: `S_5Yq52d4`,
                              md7joVNIr: q,
                              PuJJv4mcP: `Enquiry`,
                              variant: `vD79wQTj1`,
                              width: `100%`,
                              ...Z({ K_ycYaEcQ: { style: { width: `100%` } } }, F, B),
                            }),
                          }),
                        }),
                        o(T, {
                          href: A,
                          motionChild: !0,
                          nodeId: `hLwdk0waW`,
                          openInNewTab: !1,
                          scopeId: `NnruO2Fqm`,
                          children: o(d.a, {
                            className: `framer-18u3sji framer-nho1un`,
                            layoutDependency: G,
                            layoutId: `hLwdk0waW`,
                            children: o(d.div, {
                              className: `framer-1yic0hi`,
                              layoutDependency: G,
                              layoutId: `gLsVVuoJ0`,
                              children: o(R, {
                                animated: !0,
                                className: `framer-b88lix`,
                                layoutDependency: G,
                                layoutId: `jGRxRPqvp`,
                                style: {
                                  "--1335ju": 2,
                                  "--18mrqx2": `rgb(0, 0, 0)`,
                                  "--3it368": 1,
                                },
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
          `.framer-ivL90.framer-nho1un, .framer-ivL90 .framer-nho1un { display: block; }`,
          `.framer-ivL90.framer-frjomx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1120px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-ivL90 .framer-gs9qlp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 24px; min-width: 24px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-ivL90 .framer-14yp8sw { align-self: stretch; flex: none; height: auto; position: relative; width: 450px; }`,
          `.framer-ivL90 .framer-1rtkcdd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px; position: relative; width: 1px; }`,
          `.framer-ivL90 .framer-1vjat9l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-ivL90 .framer-1dloqvs, .framer-ivL90 .framer-16zkcww, .framer-ivL90 .framer-nun2xb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-ivL90 .framer-19pmgbb-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-ivL90 .framer-18u3sji { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-ivL90 .framer-1yic0hi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-ivL90 .framer-b88lix { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
          `.framer-ivL90.framer-v-ql2pbu.framer-frjomx { flex-direction: column; width: 390px; }`,
          `.framer-ivL90.framer-v-ql2pbu .framer-gs9qlp { order: 2; }`,
          `.framer-ivL90.framer-v-ql2pbu .framer-14yp8sw { align-self: unset; height: 300px; order: 0; width: 300px; }`,
          `.framer-ivL90.framer-v-ql2pbu .framer-1rtkcdd { flex: none; order: 1; padding: 30px; width: 100%; }`,
          `.framer-ivL90.framer-v-ql2pbu .framer-19pmgbb-container { width: 97px; }`,
          `.framer-ivL90.framer-v-1hlstzp.framer-frjomx { width: 810px; }`,
        ],
        `framer-ivL90`
      )),
      ($.displayName = `Service Card 3`),
      ($.defaultProps = { height: 441, width: 1120 }),
      y($, {
        variant: {
          options: [`e8KDx5Yru`, `K_ycYaEcQ`, `Ycus71RuH`],
          optionTitles: [`Desktop`, `Phone`, `Variant 3`],
          title: `Variant`,
          type: D.Enum,
        },
        NF5me_oRa: {
          defaultValue: `We work with leadership teams to craft clear, actionable strategies tailored to each organization’s unique challenges. From long-term vision to short-term execution plans, our approach ensures clarity, alignment, and sustainable growth. With our support, businesses gain a roadmap that balances ambition with practicality.`,
          title: `Description`,
          type: D.String,
        },
        hvDKqkZQw: {
          __defaultAssetReference: `data:framer/asset-reference,htMZ8Tc76ctCDLADd08GUehD10M.png?originalFilename=Slip+joint+plier+image+%28website%29.png&width=1800&height=1301`,
          title: `Image 2`,
          type: D.ResponsiveImage,
        },
        YFKMY7d12: {
          defaultValue: `Double Hand Spanner`,
          displayTextArea: !1,
          title: `Title`,
          type: D.String,
        },
        ZKclmvn_H: { description: ``, title: `Link`, type: D.Link },
        C6KVezXmF: {
          defaultValue: `Hand tools`,
          displayTextArea: !1,
          title: `Title 2`,
          type: D.String,
        },
        foHHv2HKv: { title: `Overlay`, type: D.EventHandler },
      }),
      A(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RwuM4mJPby1QNtA.woff2`,
                weight: `300`,
              },
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `https://fonts.gstatic.com/s/geist/v4/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
                weight: `600`,
              },
            ],
          },
          ...Ee,
          ...De,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { U as a, z as c, pe as i, Le as n, W as o, Y as r, R as s, $ as t };
//# sourceMappingURL=shared.DPOhhryJ.mjs.map
