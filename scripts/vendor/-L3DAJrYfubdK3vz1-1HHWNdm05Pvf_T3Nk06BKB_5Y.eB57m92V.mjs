import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  E as n,
  F as r,
  L as i,
  M as a,
  N as o,
  O as s,
  P as c,
  g as l,
  j as u,
  l as d,
  s as f,
  u as p,
  v as m,
  w as h,
} from "./react.N6WDMTqS.mjs";
import { S as g, a as _, r as v, t as y } from "./motion.CXXzZ97F.mjs";
import {
  A as b,
  C as x,
  I as S,
  L as C,
  O as w,
  T,
  U as E,
  at as D,
  c as ee,
  ct as O,
  g as k,
  it as A,
  k as j,
  mt as M,
  n as N,
  nt as te,
  ot as P,
  p as F,
  pt as ne,
  r as I,
  st as L,
  t as R,
  tt as z,
  v as B,
  w as V,
  x as H,
} from "./framer.w0XhpZTx.mjs";
import { i as re, n as ie, r as ae, t as oe } from "./nBjcbhcMb.CUwcX5Fg.mjs";
import { i as se, n as ce, r as le, t as ue } from "./ROHSdZbe7.CFImGQhF.mjs";
import { i as de, n as fe, r as pe, t as me } from "./N18bdSy5Z.DjfRONuw.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./nl385Jssa.BV16yEHR.mjs";
import ye, { t as be } from "./-IWrXdLCiAJFoA_YYrBXoHBQ7K9bUXRAYdyHWyZAWLw.CX0BH1vA.mjs";
var xe,
  U,
  W,
  Se = e(() => {
    (E(),
      (xe = `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
      (U = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...U },
      I.EventHandler,
      I.EventHandler,
      I.EventHandler,
      I.Number,
      (W = {
        font: {
          type: I.Boolean,
          title: `Font`,
          defaultValue: !1,
          disabledTitle: `Default`,
          enabledTitle: `Custom`,
        },
        fontFamily: {
          type: I.String,
          title: `Family`,
          placeholder: `Inter`,
          hidden: ({ font: e }) => !e,
        },
        fontWeight: {
          type: I.Enum,
          title: `Weight`,
          options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          optionTitles: [
            `Thin`,
            `Extra-light`,
            `Light`,
            `Regular`,
            `Medium`,
            `Semi-bold`,
            `Bold`,
            `Extra-bold`,
            `Black`,
          ],
          hidden: ({ font: e }) => !e,
        },
      }));
  }),
  Ce = e(() => {
    (E(), h());
  }),
  we = e(() => {
    h();
  }),
  Te = e(() => {
    E();
  }),
  Ee = e(() => {
    E();
  }),
  De = e(() => {
    h();
  }),
  Oe = e(() => {
    E();
  }),
  ke = e(() => {
    (i(), h());
  }),
  Ae = e(() => {
    (h(), Ee());
  }),
  je = e(() => {
    (h(), E(), Ee(), we());
  });
function Me(e) {
  let { fontFamily: t = `Inter`, fontSize: n = 16, fontWeight: r = 400, font: i = !1 } = e,
    a = Ne[r],
    s = `"${t} ${a}", "${t}", ${xe}`,
    c = t ? { fontSize: n, fontWeight: r, fontFamily: s } : { fontSize: n, fontWeight: r },
    l = async () => {
      await j
        .loadWebFontsFromSelectors([
          `CUSTOM;${t}`,
          `CUSTOM;${t} ${a}`,
          `GF;${t}-${a.toLowerCase()}`,
        ])
        .catch((e) => console.error(e));
    };
  return (
    o(() => {
      i && l();
    }, [i, t, r]),
    c
  );
}
var Ne,
  Pe = e(() => {
    (E(),
      h(),
      Se(),
      (Ne = {
        100: `Thin`,
        200: `Extra-light`,
        300: `Light`,
        400: `Regular`,
        500: `Medium`,
        600: `Semi-bold`,
        700: `Bold`,
        800: `Extra-bold`,
        900: `Black`,
      }));
  }),
  Fe = e(() => {
    (h(), E());
  }),
  Ie = e(() => {
    h();
  });
function Le(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return u(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
function Re(e) {
  let {
    padding: t,
    paddingPerSide: n,
    paddingTop: r,
    paddingRight: i,
    paddingBottom: a,
    paddingLeft: o,
  } = e;
  return u(() => (n ? `${r}px ${i}px ${a}px ${o}px` : t), [t, n, r, i, a, o]);
}
var ze,
  Be,
  Ve = e(() => {
    (h(),
      E(),
      (ze = {
        borderRadius: {
          title: `Radius`,
          type: I.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      (Be = {
        padding: {
          type: I.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  }),
  He = e(() => {
    (Se(), Ce(), we(), Te(), Ee(), De(), Oe(), ke(), Ae(), je(), Pe(), Fe(), Ie(), Ve());
  }),
  Ue = e(() => {
    He();
  });
function We({ coordinates: e, zoom: t, style: n, ...r }) {
  let i = Le(r);
  return d(g.div, {
    style: { ...n, ...U, overflow: `hidden`, borderRadius: i },
    ...r,
    children: d(`iframe`, {
      style: { height: `100%`, width: `100%`, border: 0 },
      src: `../../assets/misc/maps-c89795?q=${encodeURIComponent(e)}&z=${t}&output=embed`,
    }),
  });
}
var Ge = e(() => {
    (f(),
      E(),
      Ue(),
      T(We, {
        coordinates: {
          type: I.String,
          title: `Location`,
          placeholder: `Framer B.V.`,
          defaultValue: `Framer B.V.`,
          description: `The name of the place or its GPS coordinates.`,
        },
        zoom: { type: I.Number, step: 1, min: 0, max: 25, title: `Zoom`, defaultValue: 15 },
        ...ze,
      }));
  }),
  Ke,
  qe,
  Je,
  Ye = e(() => {
    (f(),
      h(),
      (Ke = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (qe = {
        ...Ke,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (Je = l((e, t) => d(`div`, { style: qe, ref: t }))));
  }),
  Xe = e(() => {
    Ye();
  }),
  Ze,
  Qe,
  $e = e(() => {
    Qe = (e) => {
      if (!Ze) {
        let t = new Map([
            [
              `bold`,
              e.createElement(
                e.Fragment,
                null,
                e.createElement(`path`, {
                  d: `M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z`,
                })
              ),
            ],
            [
              `duotone`,
              e.createElement(
                e.Fragment,
                null,
                e.createElement(`path`, {
                  d: `M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z`,
                  opacity: `0.2`,
                }),
                e.createElement(`path`, {
                  d: `M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z`,
                })
              ),
            ],
            [
              `fill`,
              e.createElement(
                e.Fragment,
                null,
                e.createElement(`path`, {
                  d: `M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z`,
                })
              ),
            ],
            [
              `light`,
              e.createElement(
                e.Fragment,
                null,
                e.createElement(`path`, {
                  d: `M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z`,
                })
              ),
            ],
            [
              `regular`,
              e.createElement(
                e.Fragment,
                null,
                e.createElement(`path`, {
                  d: `M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z`,
                })
              ),
            ],
            [
              `thin`,
              e.createElement(
                e.Fragment,
                null,
                e.createElement(`path`, {
                  d: `M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z`,
                })
              ),
            ],
          ]),
          n = e.forwardRef((n, r) => e.createElement(`g`, { ref: r, ...n }, t.get(n.weight)));
        ((n.displayName = `House`), (Ze = n));
      }
      return Ze;
    };
  }),
  et = e(() => {
    ($e(), $e());
  });
function tt(e, t, n = ``, r, i) {
  let a = u(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? rt(e, t);
  }, [r, n]);
  return t ? r : a;
}
var nt,
  rt,
  it = e(() => {
    (h(),
      E(),
      (nt = {
        onClick: { type: I.EventHandler },
        onMouseDown: { type: I.EventHandler },
        onMouseUp: { type: I.EventHandler },
        onMouseEnter: { type: I.EventHandler },
        onMouseLeave: { type: I.EventHandler },
      }),
      (rt = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function G(e) {
  let {
      color: t,
      selectByList: i,
      iconSearch: a,
      iconSelection: c,
      onClick: l,
      onMouseDown: u,
      onMouseUp: f,
      onMouseEnter: p,
      onMouseLeave: m,
      weight: h,
      mirrored: _,
    } = e,
    v = s(!1),
    y = tt(at, i, a, c, ct),
    [b, x] = r(y === `Home` ? Qe(n) : null);
  async function S() {
    try {
      let e = await import(`${ot}${y}.js@0.0.53`);
      v.current && x(e.default(n));
    } catch {
      v.current && x(null);
    }
  }
  o(
    () => (
      (v.current = !0),
      S(),
      () => {
        v.current = !1;
      }
    ),
    [y]
  );
  let C = B.current() === B.canvas ? d(Je, {}) : null;
  return d(g.div, {
    style: { display: `contents` },
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: m,
    onMouseDown: u,
    onMouseUp: f,
    children: b
      ? d(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: _ ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: d(b, { color: t, weight: h }),
        })
      : C,
  });
}
var at,
  ot,
  st,
  ct,
  lt = e(() => {
    (f(),
      h(),
      E(),
      y(),
      Xe(),
      et(),
      it(),
      (at =
        `AddressBook.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Anchor.AnchorSimple.AndroidLogo.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asterisk.AsteriskSimple.At.Atom.Baby.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barricade.Baseball.BaseballCap.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.BezierCurve.Bicycle.Binoculars.Bird.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bone.Book.BookBookmark.BookOpen.BookOpenText.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.BoundingBox.BowlFood.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Buildings.Bus.Butterfly.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarPlus.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarProfile.CarSimple.Cardholder.Cards.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretRight.CaretUp.CaretUpDown.Carrot.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleText.ChatDots.ChatTeardrop.ChatTeardropDots.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checks.Church.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCounterClockwise.ClockCountdown.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.Coin.CoinVertical.Coins.Columns.Command.Compass.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.Cpu.CreditCard.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSpeaker.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.DribbbleLogo.Drop.DropHalf.DropHalfBottom.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.Fan.FastForward.FastForwardCircle.Feather.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileCloud.FileCode.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.Footprints.ForkKnife.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeStand.Goggles.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GridFour.GridNine.Guitar.Hamburger.Hammer.Hand.HandCoins.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.Hash.HashStraight.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighHeel.HighlighterCircle.Hoodie.Horse.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.IceCream.IdentificationBadge.IdentificationCard.Image.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Jeep.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.Laptop.Layout.Leaf.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListMagnifyingGlass.ListNumbers.ListPlus.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.MapPin.MapPinLine.MapTrifold.MarkerCircle.Martini.MaskHappy.MaskSad.MathOperations.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MessengerLogo.MetaLogo.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.Monitor.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Newspaper.NewspaperClipping.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Nut.NyTimesLogo.Octagon.OfficeChair.Option.OrangeSlice.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleRun.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneOutgoing.PhonePlus.PhoneSlash.PhoneX.PhosphorLogo.Pi.PianoKeys.PictureInPicture.PiggyBank.Pill.PinterestLogo.Pinwheel.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.Queue.Quotes.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.Recycle.RedditLogo.Repeat.RepeatOnce.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.Rss.RssSimple.Rug.Ruler.Scales.Scan.Scissors.Scooter.Screencast.ScribbleLoop.Scroll.Seal.SealCheck.SealQuestion.SealWarning.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Spinner.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackOverflowLogo.StackSimple.Stairs.Stamp.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.Subtitles.Subtract.SubtractSquare.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextT.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Timer.Tipi.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tote.ToteSimple.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.Tree.TreeEvergreen.TreePalm.TreeStructure.TrendDown.TrendUp.Triangle.Trophy.Truck.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCircle.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.Vibrate.Video.VideoCamera.VideoCameraSlash.Vignette.VinylRecord.VirtualReality.Virus.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.WindowsLogo.Wine.Wrench.X.XCircle.XSquare.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (ot = `https://framer.com/m/phosphor-icons/`),
      (st = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (ct = at.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (G.displayName = `Phosphor`),
      (G.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      T(G, {
        selectByList: {
          type: I.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: G.defaultProps.selectByList,
        },
        iconSelection: {
          type: I.Enum,
          options: at,
          defaultValue: G.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: I.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: { type: I.Color, title: `Color`, defaultValue: G.defaultProps.color },
        weight: {
          type: I.Enum,
          title: `Weight`,
          optionTitles: st.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: st,
          defaultValue: G.defaultProps.weight,
        },
        mirrored: {
          type: I.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: G.defaultProps.mirrored,
        },
        ...nt,
      }));
  }),
  ut,
  dt,
  K,
  q,
  ft = e(() => {
    (f(),
      E(),
      y(),
      Ue(),
      h(),
      (ut =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      (dt = (e) => ut.test(String(e).toLowerCase())),
      (K = M(
        function ({
          formId: e,
          withName: t,
          nameField: n,
          withEmail: i,
          email: o,
          withMessage: s,
          message: c,
          layout: l,
          inputs: f,
          button: m,
          style: h,
          gap: _,
          onSubmit: v,
          ...y
        }) {
          let [b, x] = r(n?.value),
            [S, C] = r(o?.value),
            [w, T] = r(c?.value),
            [E, D] = r(!1),
            [ee, O] = r(!1),
            [k, A] = r(!1),
            [j, M] = r(!1),
            [N, te] = r(!1),
            P = u(() => B.current() === B.canvas, []),
            F = u(() => {
              let e = [];
              return (
                (t || s) && e.push(`max-content`),
                s && e.push(`1fr`),
                [...e, `max-content`].join(` `)
              );
            }, [t, i, s]),
            ne = u(
              () =>
                ((t && !i) || (i && !t)) && !s && l === `horizontal` ? `1fr max-content` : `1fr`,
              [t, i, s, l]
            ),
            { fontFamily: I, fontSize: L, fontWeight: R } = Me(y),
            z = Le(y),
            V = Re(y),
            H = a(() => {
              let e = !1;
              return (
                D(!1),
                O(!1),
                A(!1),
                t && !b && (D(!0), (e = !0)),
                i && (!S || !dt(S)) && (O(!0), (e = !0)),
                s && !w && (A(!0), (e = !0)),
                e
              );
            }, [dt, t, i, s, b, S, w]),
            re = a(
              (t) => {
                if ((M(!0), t.preventDefault(), H())) M(!1);
                else {
                  let n = new FormData(t.target),
                    r = Object.fromEntries(n.entries());
                  fetch(`https://formspree.io/f/xoevleab`, {
                    method: `POST`,
                    headers: { "Content-Type": `application/json`, Accept: `application/json` },
                    body: JSON.stringify(r),
                  })
                    .then(() => {
                      (te(!0), v());
                    })
                    .catch(() => M(!1));
                }
              },
              [e, v, H]
            ),
            ie = a((e) => {
              (D(!1), x(e.target.value));
            }, []),
            ae = a((e) => {
              (O(!1), C(e.target.value));
            }, []),
            oe = a((e) => {
              (A(!1), T(e.target.value));
            }, []);
          return d(g.div, {
            style: {
              ...h,
              ...U,
              flexDirection: `column`,
              "--framer-formspark-placeholder-color": f.placeholderColor,
            },
            children: N
              ? d(g.div, {
                  style: {
                    height: `60px`,
                    width: `60px`,
                    background: m.fill,
                    color: m.color,
                    borderRadius: `50%`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                  },
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { duration: 0.3 },
                  children: d(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `28`,
                    height: `28`,
                    children: d(`path`, {
                      d: `M 2 14 L 10 22 L 26 6`,
                      fill: `transparent`,
                      strokeWidth: `4`,
                      stroke: `currentColor`,
                      strokeLinecap: `round`,
                    }),
                  }),
                })
              : p(`form`, {
                  style: {
                    display: `grid`,
                    gridTemplateRows: F,
                    gridTemplateColumns: ne,
                    gap: _,
                    width: `100%`,
                    height: `100%`,
                  },
                  onSubmit: re,
                  method: `POST`,
                  children: [
                    (t || i) &&
                      p(`div`, {
                        style: {
                          width: `100%`,
                          display: `grid`,
                          gridAutoFlow: l === `horizontal` ? `column` : `row`,
                          gap: _,
                        },
                        children: [
                          t &&
                            d(`input`, {
                              className: `framer-formspark-input`,
                              type: `text`,
                              name: `name`,
                              placeholder: n.placeholder,
                              value: P ? n.value : b,
                              onChange: ie,
                              style: {
                                ...q,
                                padding: V,
                                borderRadius: z,
                                fontFamily: I,
                                fontWeight: R,
                                fontSize: L,
                                background: f.fill,
                                color: f.color,
                                boxShadow: `inset 0 0 0 1px ${E ? f.error : `transparent`}`,
                              },
                            }),
                          i &&
                            d(`input`, {
                              className: `framer-formspark-input`,
                              type: `email`,
                              name: `email`,
                              placeholder: o.placeholder,
                              value: P ? o.value : S,
                              onChange: ae,
                              style: {
                                ...q,
                                padding: V,
                                borderRadius: z,
                                fontFamily: I,
                                fontWeight: R,
                                fontSize: L,
                                background: f.fill,
                                color: f.color,
                                boxShadow: `inset 0 0 0 1px ${ee ? f.error : `transparent`}`,
                              },
                            }),
                        ],
                      }),
                    s &&
                      d(`textarea`, {
                        className: `framer-formspark-input`,
                        placeholder: c.placeholder,
                        name: `message`,
                        value: P ? c.value : w,
                        onChange: oe,
                        style: {
                          ...q,
                          minHeight: 0,
                          padding: V,
                          resize: `vertical`,
                          borderRadius: z,
                          background: f.fill,
                          fontFamily: I,
                          fontWeight: R,
                          fontSize: L,
                          color: f.color,
                          boxShadow: `inset 0 0 0 1px ${k ? f.error : `transparent`}`,
                        },
                      }),
                    p(`div`, {
                      children: [
                        d(g.input, {
                          type: `submit`,
                          value: m.label,
                          style: {
                            ...q,
                            borderRadius: z,
                            padding: V,
                            fontFamily: I,
                            fontWeight: m.fontWeight,
                            fontSize: L,
                            background: m.fill,
                            cursor: `pointer`,
                            color: m.color,
                            zIndex: 1,
                          },
                          transition: { type: `ease`, duration: 0.3 },
                          whileHover: { opacity: 0.8 },
                        }),
                        j &&
                          d(`div`, {
                            style: {
                              borderRadius: z,
                              position: `absolute`,
                              display: `flex`,
                              justifyContent: `center`,
                              alignItems: `center`,
                              width: `100%`,
                              height: `100%`,
                              left: 0,
                              top: 0,
                              zIndex: 2,
                              color: m.color,
                              background: m.fill,
                            },
                            children: d(g.div, {
                              style: { height: 16, width: 16 },
                              initial: { rotate: 0 },
                              animate: { rotate: 360 },
                              transition: { duration: 2, repeat: 1 / 0 },
                              children: p(`svg`, {
                                xmlns: `http://www.w3.org/2000/svg`,
                                width: `16`,
                                height: `16`,
                                children: [
                                  d(`path`, {
                                    d: `M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z`,
                                    fill: `currentColor`,
                                    opacity: `0.2`,
                                  }),
                                  d(`path`, {
                                    d: `M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z`,
                                    fill: `currentColor`,
                                  }),
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
          });
        },
        [
          `.framer-formspark-input::placeholder { color: var(--framer-formspark-placeholder-color) !important; }`,
        ]
      )),
      (K.defaultProps = {
        fontSize: 16,
        fontFamily: `Inter`,
        fontWeight: 400,
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
        topLeftRadius: 8,
        topRightRadius: 8,
        bottomRightRadius: 8,
        bottomLeftRadius: 8,
        gap: 15,
        nameField: { value: void 0, placeholder: `Name` },
        email: { value: void 0, placeholder: `Email` },
        message: { value: void 0, placeholder: `Message` },
        inputs: {
          fill: `#EBEBEB`,
          color: `#000`,
          placeholderColor: `rgba(0, 0, 0, 0.5)`,
          error: `#EE4444`,
        },
        layout: {
          fill: `#EBEBEB`,
          color: `#000`,
          placeholderColor: `rgba(0, 0, 0, 0.5)`,
          error: `#EE4444`,
        },
        button: { label: `Sign Up`, fontWeight: 600, fill: `#000`, color: `#FFF` },
      }),
      T(K, {
        formId: {
          title: `ID`,
          placeholder: `7PbPpGN3`,
          type: I.String,
          description: `Create a [FormSpark](https://formspark.io/) account, add a new form and copy its ID. [Learn more…](https://www.framer.com/sites/integrations/formspark/)`,
        },
        withName: {
          title: `Name`,
          type: I.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        nameField: {
          title: ` `,
          type: I.Object,
          controls: {
            placeholder: { title: `Placeholder`, type: I.String, defaultValue: `Name` },
            value: { title: `Value`, type: I.String, defaultValue: `` },
          },
          hidden: (e) => !e.withName,
        },
        withEmail: {
          title: `Email`,
          type: I.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        email: {
          title: ` `,
          type: I.Object,
          controls: {
            placeholder: { title: `Placeholder`, type: I.String, defaultValue: `Email` },
            value: { title: `Value`, type: I.String },
          },
          hidden: (e) => !e.withEmail,
        },
        withMessage: {
          title: `Message`,
          type: I.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        message: {
          title: ` `,
          type: I.Object,
          controls: {
            placeholder: { title: `Placeholder`, type: I.String, defaultValue: `Message` },
            value: { title: `Value`, type: I.String },
          },
          hidden: (e) => !e.withMessage,
        },
        layout: {
          title: `Layout`,
          type: I.Enum,
          options: [`horizontal`, `vertical`],
          displaySegmentedControl: !0,
          defaultValue: `horizontal`,
        },
        inputs: {
          title: `Inputs`,
          type: I.Object,
          controls: {
            fill: { title: `Fill`, type: I.Color, defaultValue: `#EBEBEB` },
            color: { title: `Text`, type: I.Color, defaultValue: `#000` },
            placeholderColor: {
              title: `Placeholder`,
              type: I.Color,
              defaultValue: `rgba(0, 0, 0, 0.5)`,
            },
            error: { title: `Error`, type: I.Color, defaultValue: `#EE4444` },
          },
        },
        button: {
          title: `Button`,
          type: I.Object,
          controls: {
            label: { title: `Label`, type: I.String, defaultValue: `Sign Up` },
            fontWeight: { ...W.fontWeight, defaultValue: 600 },
            fill: { title: `Fill`, type: I.Color, defaultValue: `#000` },
            color: { title: `Text`, type: I.Color, defaultValue: `#FFF` },
          },
        },
        ...W,
        fontSize: { title: `Font Size`, type: I.Number, displayStepper: !0, defaultValue: 16 },
        ...Be,
        ...ze,
        gap: { title: `Gap`, type: I.Number, displayStepper: !0, min: 0 },
        onSubmit: { type: I.EventHandler },
      }),
      (q = {
        WebkitAppearance: `none`,
        display: `inline-block`,
        width: `100%`,
        lineHeight: `1.4em`,
        outline: `none`,
        border: `none`,
      }));
  }),
  pt,
  mt,
  J,
  Y,
  ht = e(() => {
    (f(),
      E(),
      y(),
      Ue(),
      h(),
      (pt =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      (mt = (e) => pt.test(String(e).toLowerCase())),
      (J = M(
        function ({
          formId: e,
          withName: t,
          nameField: n,
          withEmail: i,
          email: o,
          withMessage: s,
          message: c,
          layout: l,
          inputs: f,
          button: m,
          style: h,
          gap: _,
          onSubmit: v,
          ...y
        }) {
          let [b, x] = r(n?.value),
            [S, C] = r(o?.value),
            [w, T] = r(c?.value),
            [E, D] = r(!1),
            [ee, O] = r(!1),
            [k, A] = r(!1),
            [j, M] = r(!1),
            [N, te] = r(!1),
            P = u(() => B.current() === B.canvas, []),
            F = u(() => {
              let e = [];
              return (
                (t || s) && e.push(`max-content`),
                s && e.push(`1fr`),
                [...e, `max-content`].join(` `)
              );
            }, [t, i, s]),
            ne = u(
              () =>
                ((t && !i) || (i && !t)) && !s && l === `horizontal` ? `1fr max-content` : `1fr`,
              [t, i, s, l]
            ),
            { fontFamily: I, fontSize: L, fontWeight: R } = Me(y),
            z = Le(y),
            V = Re(y),
            H = a(() => {
              let e = !1;
              return (
                D(!1),
                O(!1),
                A(!1),
                t && !b && (D(!0), (e = !0)),
                i && (!S || !mt(S)) && (O(!0), (e = !0)),
                s && !w && (A(!0), (e = !0)),
                e
              );
            }, [mt, t, i, s, b, S, w]),
            re = a(
              (t) => {
                if ((M(!0), t.preventDefault(), H())) M(!1);
                else {
                  let n = new FormData(t.target),
                    r = Object.fromEntries(n.entries());
                  fetch(`https://formspree.io/f/xoevleab`, {
                    method: `POST`,
                    headers: { "Content-Type": `application/json`, Accept: `application/json` },
                    body: JSON.stringify(r),
                  })
                    .then(() => {
                      (te(!0), v());
                    })
                    .catch(() => M(!1));
                }
              },
              [e, v, H]
            ),
            ie = a((e) => {
              (D(!1), x(e.target.value));
            }, []),
            ae = a((e) => {
              (O(!1), C(e.target.value));
            }, []),
            oe = a((e) => {
              (A(!1), T(e.target.value));
            }, []);
          return d(g.div, {
            style: {
              ...h,
              ...U,
              flexDirection: `column`,
              "--framer-formspark-placeholder-color": f.placeholderColor,
            },
            children: N
              ? d(g.div, {
                  style: {
                    height: `60px`,
                    width: `60px`,
                    background: m.fill,
                    color: m.color,
                    borderRadius: `50%`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                  },
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { duration: 0.3 },
                  children: d(`svg`, {
                    xmlns: `http://www.w3.org/2000/svg`,
                    width: `28`,
                    height: `28`,
                    children: d(`path`, {
                      d: `M 2 14 L 10 22 L 26 6`,
                      fill: `transparent`,
                      strokeWidth: `4`,
                      stroke: `currentColor`,
                      strokeLinecap: `round`,
                    }),
                  }),
                })
              : p(`form`, {
                  style: {
                    display: `grid`,
                    gridTemplateRows: F,
                    gridTemplateColumns: ne,
                    gap: _,
                    width: `100%`,
                    height: `100%`,
                  },
                  onSubmit: re,
                  method: `POST`,
                  children: [
                    (t || i) &&
                      p(`div`, {
                        style: {
                          width: `100%`,
                          display: `grid`,
                          gridAutoFlow: l === `horizontal` ? `column` : `row`,
                          gap: _,
                        },
                        children: [
                          t &&
                            d(`input`, {
                              className: `framer-formspark-input`,
                              type: `text`,
                              name: `name`,
                              placeholder: n.placeholder,
                              value: P ? n.value : b,
                              onChange: ie,
                              style: {
                                ...Y,
                                padding: V,
                                borderRadius: z,
                                fontFamily: I,
                                fontWeight: R,
                                fontSize: L,
                                background: f.fill,
                                color: f.color,
                                boxShadow: `inset 0 0 0 1px ${E ? f.error : `transparent`}`,
                              },
                            }),
                          i &&
                            d(`input`, {
                              className: `framer-formspark-input`,
                              type: `email`,
                              name: `email`,
                              placeholder: o.placeholder,
                              value: P ? o.value : S,
                              onChange: ae,
                              style: {
                                ...Y,
                                padding: V,
                                borderRadius: z,
                                fontFamily: I,
                                fontWeight: R,
                                fontSize: L,
                                background: f.fill,
                                color: f.color,
                                boxShadow: `inset 0 0 0 1px ${ee ? f.error : `transparent`}`,
                              },
                            }),
                        ],
                      }),
                    s &&
                      d(`textarea`, {
                        className: `framer-formspark-input`,
                        placeholder: c.placeholder,
                        name: `message`,
                        value: P ? c.value : w,
                        onChange: oe,
                        style: {
                          ...Y,
                          minHeight: 0,
                          padding: V,
                          resize: `vertical`,
                          borderRadius: z,
                          background: f.fill,
                          fontFamily: I,
                          fontWeight: R,
                          fontSize: L,
                          color: f.color,
                          boxShadow: `inset 0 0 0 1px ${k ? f.error : `transparent`}`,
                        },
                      }),
                    p(`div`, {
                      children: [
                        d(g.input, {
                          type: `submit`,
                          value: m.label,
                          style: {
                            ...Y,
                            borderRadius: z,
                            padding: V,
                            fontFamily: I,
                            fontWeight: m.fontWeight,
                            fontSize: L,
                            background: m.fill,
                            cursor: `pointer`,
                            color: m.color,
                            zIndex: 1,
                          },
                          transition: { type: `ease`, duration: 0.3 },
                          whileHover: { opacity: 0.8 },
                        }),
                        j &&
                          d(`div`, {
                            style: {
                              borderRadius: z,
                              position: `absolute`,
                              display: `flex`,
                              justifyContent: `center`,
                              alignItems: `center`,
                              width: `100%`,
                              height: `100%`,
                              left: 0,
                              top: 0,
                              zIndex: 2,
                              color: m.color,
                              background: m.fill,
                            },
                            children: d(g.div, {
                              style: { height: 16, width: 16 },
                              initial: { rotate: 0 },
                              animate: { rotate: 360 },
                              transition: { duration: 2, repeat: 1 / 0 },
                              children: p(`svg`, {
                                xmlns: `http://www.w3.org/2000/svg`,
                                width: `16`,
                                height: `16`,
                                children: [
                                  d(`path`, {
                                    d: `M 8 0 C 3.582 0 0 3.582 0 8 C 0 12.419 3.582 16 8 16 C 12.418 16 16 12.419 16 8 C 15.999 3.582 12.418 0 8 0 Z M 8 14 C 4.687 14 2 11.314 2 8 C 2 4.687 4.687 2 8 2 C 11.314 2 14 4.687 14 8 C 14 11.314 11.314 14 8 14 Z`,
                                    fill: `currentColor`,
                                    opacity: `0.2`,
                                  }),
                                  d(`path`, {
                                    d: `M 8 0 C 12.418 0 15.999 3.582 16 8 C 16 8 16 9 15 9 C 14 9 14 8 14 8 C 14 4.687 11.314 2 8 2 C 4.687 2 2 4.687 2 8 C 2 8 2 9 1 9 C 0 9 0 8 0 8 C 0 3.582 3.582 0 8 0 Z`,
                                    fill: `currentColor`,
                                  }),
                                ],
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
          });
        },
        [
          `.framer-formspark-input::placeholder { color: var(--framer-formspark-placeholder-color) !important; }`,
        ]
      )),
      (J.defaultProps = {
        fontSize: 16,
        fontFamily: `Inter`,
        fontWeight: 400,
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
        topLeftRadius: 8,
        topRightRadius: 8,
        bottomRightRadius: 8,
        bottomLeftRadius: 8,
        gap: 15,
        nameField: { value: void 0, placeholder: `Name` },
        email: { value: void 0, placeholder: `Email` },
        message: { value: void 0, placeholder: `Message` },
        inputs: {
          fill: `#EBEBEB`,
          color: `#000`,
          placeholderColor: `rgba(0, 0, 0, 0.5)`,
          error: `#EE4444`,
        },
        layout: {
          fill: `#EBEBEB`,
          color: `#000`,
          placeholderColor: `rgba(0, 0, 0, 0.5)`,
          error: `#EE4444`,
        },
        button: { label: `Sign Up`, fontWeight: 600, fill: `#000`, color: `#FFF` },
      }),
      T(J, {
        formId: {
          title: `ID`,
          placeholder: `7PbPpGN3`,
          type: I.String,
          description: `Create a [FormSpark](https://formspark.io/) account, add a new form and copy its ID. [Learn more…](https://www.framer.com/sites/integrations/formspark/)`,
        },
        withName: {
          title: `Name`,
          type: I.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        nameField: {
          title: ` `,
          type: I.Object,
          controls: {
            placeholder: { title: `Placeholder`, type: I.String, defaultValue: `Name` },
            value: { title: `Value`, type: I.String, defaultValue: `` },
          },
          hidden: (e) => !e.withName,
        },
        withEmail: {
          title: `Email`,
          type: I.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        email: {
          title: ` `,
          type: I.Object,
          controls: {
            placeholder: { title: `Placeholder`, type: I.String, defaultValue: `Email` },
            value: { title: `Value`, type: I.String },
          },
          hidden: (e) => !e.withEmail,
        },
        withMessage: {
          title: `Message`,
          type: I.Boolean,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        message: {
          title: ` `,
          type: I.Object,
          controls: {
            placeholder: { title: `Placeholder`, type: I.String, defaultValue: `Message` },
            value: { title: `Value`, type: I.String },
          },
          hidden: (e) => !e.withMessage,
        },
        layout: {
          title: `Layout`,
          type: I.Enum,
          options: [`horizontal`, `vertical`],
          displaySegmentedControl: !0,
          defaultValue: `horizontal`,
        },
        inputs: {
          title: `Inputs`,
          type: I.Object,
          controls: {
            fill: { title: `Fill`, type: I.Color, defaultValue: `#EBEBEB` },
            color: { title: `Text`, type: I.Color, defaultValue: `#000` },
            placeholderColor: {
              title: `Placeholder`,
              type: I.Color,
              defaultValue: `rgba(0, 0, 0, 0.5)`,
            },
            error: { title: `Error`, type: I.Color, defaultValue: `#EE4444` },
          },
        },
        button: {
          title: `Button`,
          type: I.Object,
          controls: {
            label: { title: `Label`, type: I.String, defaultValue: `Sign Up` },
            fontWeight: { ...W.fontWeight, defaultValue: 600 },
            fill: { title: `Fill`, type: I.Color, defaultValue: `#000` },
            color: { title: `Text`, type: I.Color, defaultValue: `#FFF` },
          },
        },
        ...W,
        fontSize: { title: `Font Size`, type: I.Number, displayStepper: !0, defaultValue: 16 },
        ...Be,
        ...ze,
        gap: { title: `Gap`, type: I.Number, displayStepper: !0, min: 0 },
        onSubmit: { type: I.EventHandler },
      }),
      (Y = {
        WebkitAppearance: `none`,
        display: `inline-block`,
        width: `100%`,
        lineHeight: `1.4em`,
        outline: `none`,
        border: `none`,
      }));
  }),
  gt = e(() => {
    it();
  });
function X(e) {
  let {
      color: t,
      selectByList: i,
      iconSearch: a,
      iconSelection: c,
      onClick: l,
      onMouseDown: u,
      onMouseUp: f,
      onMouseEnter: p,
      onMouseLeave: m,
      weight: h,
      mirrored: _,
    } = e,
    v = s(!1),
    y = tt(_t, i, a, c, bt),
    [b, x] = r(y === `Home` ? Qe(n) : null);
  async function S() {
    try {
      let e = await import(`${vt}${y}.js@0.0.53`);
      v.current && x(e.default(n));
    } catch {
      v.current && x(null);
    }
  }
  o(
    () => (
      (v.current = !0),
      S(),
      () => {
        v.current = !1;
      }
    ),
    [y]
  );
  let C = B.current() === B.canvas ? d(Je, {}) : null;
  return d(g.div, {
    style: { display: `contents` },
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: m,
    onMouseDown: u,
    onMouseUp: f,
    children: b
      ? d(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 256 256`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            color: t,
            flexShrink: 0,
            transform: _ ? `scale(-1, 1)` : void 0,
          },
          focusable: `false`,
          color: t,
          children: d(b, { color: t, weight: h }),
        })
      : C,
  });
}
var _t,
  vt,
  yt,
  bt,
  xt = e(() => {
    (f(),
      h(),
      E(),
      y(),
      Xe(),
      et(),
      gt(),
      (_t =
        `AddressBook.AirTrafficControl.Airplane.AirplaneInFlight.AirplaneLanding.AirplaneTakeoff.AirplaneTilt.Airplay.Alarm.Alien.AlignBottom.AlignBottomSimple.AlignCenterVertical.AlignLeft.AlignLeftSimple.AlignRight.AlignRightSimple.AlignTop.AlignTopSimple.AmazonLogo.Anchor.AnchorSimple.AndroidLogo.AngularLogo.Aperture.AppStoreLogo.AppWindow.AppleLogo.ApplePodcastsLogo.Archive.ArchiveBox.ArchiveTray.Armchair.ArrowArcLeft.ArrowArcRight.ArrowBendDownLeft.ArrowBendDownRight.ArrowBendLeftDown.ArrowBendLeftUp.ArrowBendRightDown.ArrowBendRightUp.ArrowBendUpLeft.ArrowBendUpRight.ArrowCircleDown.ArrowCircleDownLeft.ArrowCircleDownRight.ArrowCircleLeft.ArrowCircleRight.ArrowCircleUp.ArrowCircleUpLeft.ArrowCircleUpRight.ArrowClockwise.ArrowDown.ArrowDownLeft.ArrowDownRight.ArrowElbowDownLeft.ArrowElbowDownRight.ArrowElbowLeft.ArrowElbowLeftDown.ArrowElbowLeftUp.ArrowElbowRight.ArrowElbowRightDown.ArrowElbowRightUp.ArrowElbowUpLeft.ArrowElbowUpRight.ArrowFatDown.ArrowFatLeft.ArrowFatLineDown.ArrowFatLineLeft.ArrowFatLineRight.ArrowFatLineUp.ArrowFatLinesDown.ArrowFatLinesLeft.ArrowFatLinesRight.ArrowFatLinesUp.ArrowFatRight.ArrowFatUp.ArrowLeft.ArrowLineDown.ArrowLineDownLeft.ArrowLineDownRight.ArrowLineLeft.ArrowLineRight.ArrowLineUp.ArrowLineUpLeft.ArrowLineUpRight.ArrowRight.ArrowSquareDown.ArrowSquareDownLeft.ArrowSquareDownRight.ArrowSquareIn.ArrowSquareLeft.ArrowSquareOut.ArrowSquareRight.ArrowSquareUp.ArrowSquareUpLeft.ArrowSquareUpRight.ArrowUDownLeft.ArrowUDownRight.ArrowULeftDown.ArrowULeftUp.ArrowURightDown.ArrowURightUp.ArrowUUpLeft.ArrowUUpRight.ArrowUp.ArrowUpLeft.ArrowUpRight.ArrowsClockwise.ArrowsDownUp.ArrowsHorizontal.ArrowsIn.ArrowsInCardinal.ArrowsInLineVertical.ArrowsInSimple.ArrowsLeftRight.ArrowsMerge.ArrowsOut.ArrowsOutCardinal.ArrowsOutSimple.ArrowsSplit.ArrowsVertical.Article.ArticleMedium.ArticleNyTimes.Asterisk.AsteriskSimple.At.Atom.Baby.Backpack.Backspace.Bag.BagSimple.Balloon.Bandaids.Bank.Barbell.Barcode.Barricade.Baseball.BaseballCap.Basket.Basketball.Bathtub.BatteryCharging.BatteryEmpty.BatteryFull.BatteryHigh.BatteryLow.BatteryMedium.BatteryPlus.BatteryPlusVertical.BatteryVerticalEmpty.BatteryVerticalFull.BatteryVerticalHigh.BatteryVerticalLow.BatteryWarning.Bed.BeerBottle.BeerStein.BehanceLogo.Bell.BellRinging.BellSimple.BellSimpleRinging.BellSimpleSlash.BellSimpleZ.BellSlash.BellZ.BezierCurve.Bicycle.Binoculars.Bird.Bluetooth.BluetoothConnected.BluetoothSlash.BluetoothX.Boat.Bone.Book.BookBookmark.BookOpen.BookOpenText.Bookmark.BookmarkSimple.Bookmarks.BookmarksSimple.Books.Boot.BoundingBox.BowlFood.BracketsAngle.BracketsCurly.BracketsRound.BracketsSquare.Brain.Brandy.Bridge.Briefcase.BriefcaseMetal.Broadcast.Broom.Browser.Browsers.Bug.BugBeetle.BugDroid.Buildings.Bus.Butterfly.Cactus.Cake.Calculator.Calendar.CalendarBlank.CalendarCheck.CalendarPlus.CalendarX.CallBell.Camera.CameraPlus.CameraRotate.CameraSlash.Campfire.Car.CarProfile.CarSimple.Cardholder.Cards.CaretCircleDoubleUp.CaretCircleDown.CaretCircleLeft.CaretCircleRight.CaretCircleUp.CaretCircleUpDown.CaretDoubleDown.CaretDoubleLeft.CaretDoubleRight.CaretDoubleUp.CaretDown.CaretLeft.CaretRight.CaretUp.CaretUpDown.Carrot.CassetteTape.CastleTurret.Cat.CellSignalFull.CellSignalHigh.CellSignalLow.CellSignalMedium.CellSignalNone.CellSignalSlash.CellSignalX.Certificate.Chair.Chalkboard.ChalkboardSimple.ChalkboardTeacher.Champagne.ChargingStation.ChartBar.ChartBarHorizontal.ChartDonut.ChartLine.ChartLineDown.ChartLineUp.ChartPie.ChartPieSlice.ChartPolar.ChartScatter.Chat.ChatCentered.ChatCenteredDots.ChatCenteredText.ChatCircle.ChatCircleDots.ChatCircleText.ChatDots.ChatTeardrop.ChatTeardropDots.ChatTeardropText.ChatText.Chats.ChatsCircle.ChatsTeardrop.Check.CheckCircle.CheckFat.CheckSquare.CheckSquareOffset.Checks.Church.Circle.CircleDashed.CircleHalf.CircleHalfTilt.CircleNotch.CirclesFour.CirclesThree.CirclesThreePlus.Circuitry.Clipboard.ClipboardText.Clock.ClockAfternoon.ClockClockwise.ClockCounterClockwise.ClockCountdown.ClosedCaptioning.Cloud.CloudArrowDown.CloudArrowUp.CloudCheck.CloudFog.CloudLightning.CloudMoon.CloudRain.CloudSlash.CloudSnow.CloudSun.CloudWarning.CloudX.Club.CoatHanger.CodaLogo.Code.CodeBlock.CodeSimple.CodepenLogo.CodesandboxLogo.Coffee.Coin.CoinVertical.Coins.Columns.Command.Compass.CompassTool.ComputerTower.Confetti.ContactlessPayment.Control.Cookie.CookingPot.Copy.CopySimple.Copyleft.Copyright.CornersIn.CornersOut.Couch.Cpu.CreditCard.Crop.Cross.Crosshair.CrosshairSimple.Crown.CrownSimple.Cube.CubeFocus.CubeTransparent.CurrencyBtc.CurrencyCircleDollar.CurrencyCny.CurrencyDollar.CurrencyDollarSimple.CurrencyEth.CurrencyEur.CurrencyGbp.CurrencyInr.CurrencyJpy.CurrencyKrw.CurrencyKzt.CurrencyNgn.CurrencyRub.Cursor.CursorClick.CursorText.Cylinder.Database.Desktop.DesktopTower.Detective.DevToLogo.DeviceMobile.DeviceMobileCamera.DeviceMobileSpeaker.DeviceTablet.DeviceTabletCamera.DeviceTabletSpeaker.Devices.Diamond.DiamondsFour.DiceFive.DiceFour.DiceOne.DiceSix.DiceThree.DiceTwo.Disc.DiscordLogo.Divide.Dna.Dog.Door.DoorOpen.Dot.DotOutline.DotsNine.DotsSix.DotsSixVertical.DotsThree.DotsThreeCircle.DotsThreeOutline.DotsThreeVertical.Download.DownloadSimple.Dress.DribbbleLogo.Drop.DropHalf.DropHalfBottom.DropboxLogo.Ear.EarSlash.Egg.EggCrack.Eject.EjectSimple.Elevator.Engine.Envelope.EnvelopeOpen.EnvelopeSimple.EnvelopeSimpleOpen.Equalizer.Equals.Eraser.EscalatorDown.EscalatorUp.Exam.Exclude.ExcludeSquare.Export.Eye.EyeClosed.EyeSlash.Eyedropper.EyedropperSample.Eyeglasses.FaceMask.FacebookLogo.Factory.Faders.FadersHorizontal.Fan.FastForward.FastForwardCircle.Feather.FigmaLogo.File.FileArchive.FileArrowDown.FileArrowUp.FileAudio.FileCloud.FileCode.FileCss.FileCsv.FileDashed.FileDoc.FileHtml.FileImage.FileJpg.FileJs.FileJsx.FileLock.FileMagnifyingGlass.FileMinus.FilePdf.FilePlus.FilePng.FilePpt.FileRs.FileSql.FileSvg.FileText.FileTs.FileTsx.FileVideo.FileVue.FileX.FileXls.FileZip.Files.FilmReel.FilmScript.FilmSlate.FilmStrip.Fingerprint.FingerprintSimple.FinnTheHuman.Fire.FireExtinguisher.FireSimple.FirstAid.FirstAidKit.Fish.FishSimple.Flag.FlagBanner.FlagCheckered.FlagPennant.Flame.Flashlight.Flask.FloppyDisk.FloppyDiskBack.FlowArrow.Flower.FlowerLotus.FlowerTulip.FlyingSaucer.Folder.FolderDashed.FolderLock.FolderMinus.FolderNotch.FolderNotchMinus.FolderNotchOpen.FolderNotchPlus.FolderOpen.FolderPlus.FolderSimple.FolderSimpleDashed.FolderSimpleLock.FolderSimpleMinus.FolderSimplePlus.FolderSimpleStar.FolderSimpleUser.FolderStar.FolderUser.Folders.Football.Footprints.ForkKnife.FrameCorners.FramerLogo.Function.Funnel.FunnelSimple.GameController.Garage.GasCan.GasPump.Gauge.Gavel.Gear.GearFine.GearSix.GenderFemale.GenderIntersex.GenderMale.GenderNeuter.GenderNonbinary.GenderTransgender.Ghost.Gif.Gift.GitBranch.GitCommit.GitDiff.GitFork.GitMerge.GitPullRequest.GithubLogo.GitlabLogo.GitlabLogoSimple.Globe.GlobeHemisphereEast.GlobeHemisphereWest.GlobeSimple.GlobeStand.Goggles.GoodreadsLogo.GoogleCardboardLogo.GoogleChromeLogo.GoogleDriveLogo.GoogleLogo.GooglePhotosLogo.GooglePlayLogo.GooglePodcastsLogo.Gradient.GraduationCap.Grains.GrainsSlash.Graph.GridFour.GridNine.Guitar.Hamburger.Hammer.Hand.HandCoins.HandEye.HandFist.HandGrabbing.HandHeart.HandPalm.HandPointing.HandSoap.HandSwipeLeft.HandSwipeRight.HandTap.HandWaving.Handbag.HandbagSimple.HandsClapping.HandsPraying.Handshake.HardDrive.HardDrives.Hash.HashStraight.Headlights.Headphones.Headset.Heart.HeartBreak.HeartHalf.HeartStraight.HeartStraightBreak.Heartbeat.Hexagon.HighHeel.HighlighterCircle.Hoodie.Horse.Hourglass.HourglassHigh.HourglassLow.HourglassMedium.HourglassSimple.HourglassSimpleHigh.HourglassSimpleLow.House.HouseLine.HouseSimple.IceCream.IdentificationBadge.IdentificationCard.Image.ImageSquare.Images.ImagesSquare.Infinity.Info.InstagramLogo.Intersect.IntersectSquare.IntersectThree.Jeep.Kanban.Key.KeyReturn.Keyboard.Keyhole.Knife.Ladder.LadderSimple.Lamp.Laptop.Layout.Leaf.Lifebuoy.Lightbulb.LightbulbFilament.Lighthouse.Lightning.LightningA.LightningSlash.LineSegment.LineSegments.Link.LinkBreak.LinkSimple.LinkSimpleBreak.LinkSimpleHorizontal.LinkedinLogo.LinuxLogo.List.ListBullets.ListChecks.ListDashes.ListMagnifyingGlass.ListNumbers.ListPlus.Lock.LockKey.LockKeyOpen.LockLaminated.LockLaminatedOpen.LockOpen.LockSimple.LockSimpleOpen.Lockers.MagicWand.Magnet.MagnetStraight.MagnifyingGlass.MagnifyingGlassMinus.MagnifyingGlassPlus.MapPin.MapPinLine.MapTrifold.MarkerCircle.Martini.MaskHappy.MaskSad.MathOperations.Medal.MedalMilitary.MediumLogo.Megaphone.MegaphoneSimple.MessengerLogo.MetaLogo.Metronome.Microphone.MicrophoneSlash.MicrophoneStage.MicrosoftExcelLogo.MicrosoftOutlookLogo.MicrosoftTeamsLogo.MicrosoftWordLogo.Minus.MinusCircle.MinusSquare.Money.Monitor.MonitorPlay.Moon.MoonStars.Moped.MopedFront.Mosque.Motorcycle.Mountains.Mouse.MouseSimple.MusicNote.MusicNoteSimple.MusicNotes.MusicNotesPlus.MusicNotesSimple.NavigationArrow.Needle.Newspaper.NewspaperClipping.Notches.Note.NoteBlank.NotePencil.Notebook.Notepad.Notification.NotionLogo.NumberCircleEight.NumberCircleFive.NumberCircleFour.NumberCircleNine.NumberCircleOne.NumberCircleSeven.NumberCircleSix.NumberCircleThree.NumberCircleTwo.NumberCircleZero.NumberEight.NumberFive.NumberFour.NumberNine.NumberOne.NumberSeven.NumberSix.NumberSquareEight.NumberSquareFive.NumberSquareFour.NumberSquareNine.NumberSquareOne.NumberSquareSeven.NumberSquareSix.NumberSquareThree.NumberSquareTwo.NumberSquareZero.NumberThree.NumberTwo.NumberZero.Nut.NyTimesLogo.Octagon.OfficeChair.Option.OrangeSlice.Package.PaintBrush.PaintBrushBroad.PaintBrushHousehold.PaintBucket.PaintRoller.Palette.Pants.PaperPlane.PaperPlaneRight.PaperPlaneTilt.Paperclip.PaperclipHorizontal.Parachute.Paragraph.Parallelogram.Park.Password.Path.PatreonLogo.Pause.PauseCircle.PawPrint.PaypalLogo.Peace.Pen.PenNib.PenNibStraight.Pencil.PencilCircle.PencilLine.PencilSimple.PencilSimpleLine.PencilSimpleSlash.PencilSlash.Pentagram.Pepper.Percent.Person.PersonArmsSpread.PersonSimple.PersonSimpleBike.PersonSimpleRun.PersonSimpleThrow.PersonSimpleWalk.Perspective.Phone.PhoneCall.PhoneDisconnect.PhoneIncoming.PhoneOutgoing.PhonePlus.PhoneSlash.PhoneX.PhosphorLogo.Pi.PianoKeys.PictureInPicture.PiggyBank.Pill.PinterestLogo.Pinwheel.Pizza.Placeholder.Planet.Plant.Play.PlayCircle.PlayPause.Playlist.Plug.PlugCharging.Plugs.PlugsConnected.Plus.PlusCircle.PlusMinus.PlusSquare.PokerChip.PoliceCar.Polygon.Popcorn.PottedPlant.Power.Prescription.Presentation.PresentationChart.Printer.Prohibit.ProhibitInset.ProjectorScreen.ProjectorScreenChart.Pulse.PushPin.PushPinSimple.PushPinSimpleSlash.PushPinSlash.PuzzlePiece.QrCode.Question.Queue.Quotes.Radical.Radio.RadioButton.Radioactive.Rainbow.RainbowCloud.ReadCvLogo.Receipt.ReceiptX.Record.Rectangle.Recycle.RedditLogo.Repeat.RepeatOnce.Rewind.RewindCircle.RoadHorizon.Robot.Rocket.RocketLaunch.Rows.Rss.RssSimple.Rug.Ruler.Scales.Scan.Scissors.Scooter.Screencast.ScribbleLoop.Scroll.Seal.SealCheck.SealQuestion.SealWarning.Selection.SelectionAll.SelectionBackground.SelectionForeground.SelectionInverse.SelectionPlus.SelectionSlash.Shapes.Share.ShareFat.ShareNetwork.Shield.ShieldCheck.ShieldCheckered.ShieldChevron.ShieldPlus.ShieldSlash.ShieldStar.ShieldWarning.ShirtFolded.ShootingStar.ShoppingBag.ShoppingBagOpen.ShoppingCart.ShoppingCartSimple.Shower.Shrimp.Shuffle.ShuffleAngular.ShuffleSimple.Sidebar.SidebarSimple.Sigma.SignIn.SignOut.Signature.Signpost.SimCard.Siren.SketchLogo.SkipBack.SkipBackCircle.SkipForward.SkipForwardCircle.Skull.SlackLogo.Sliders.SlidersHorizontal.Slideshow.Smiley.SmileyAngry.SmileyBlank.SmileyMeh.SmileyNervous.SmileySad.SmileySticker.SmileyWink.SmileyXEyes.SnapchatLogo.Sneaker.SneakerMove.Snowflake.SoccerBall.SortAscending.SortDescending.SoundcloudLogo.Spade.Sparkle.SpeakerHifi.SpeakerHigh.SpeakerLow.SpeakerNone.SpeakerSimpleHigh.SpeakerSimpleLow.SpeakerSimpleNone.SpeakerSimpleSlash.SpeakerSimpleX.SpeakerSlash.SpeakerX.Spinner.SpinnerGap.Spiral.SplitHorizontal.SplitVertical.SpotifyLogo.Square.SquareHalf.SquareHalfBottom.SquareLogo.SquareSplitVertical.SquaresFour.Stack.StackOverflowLogo.StackSimple.Stairs.Stamp.Star.StarAndCrescent.StarFour.StarHalf.StarOfDavid.SteeringWheel.Steps.Stethoscope.Sticker.Stool.Stop.StopCircle.Storefront.Strategy.StripeLogo.Student.Subtitles.Subtract.SubtractSquare.Suitcase.SuitcaseRolling.SuitcaseSimple.Sun.SunDim.SunHorizon.Sunglasses.Swap.Swatches.SwimmingPool.Sword.Synagogue.Syringe.TShirt.Table.Tabs.Tag.TagChevron.TagSimple.Target.Taxi.TelegramLogo.Television.TelevisionSimple.TennisBall.Tent.Terminal.TerminalWindow.TestTube.TextAUnderline.TextAa.TextAlignCenter.TextAlignJustify.TextAlignLeft.TextAlignRight.TextB.TextColumns.TextH.TextHFive.TextHFour.TextHOne.TextHSix.TextHThree.TextHTwo.TextIndent.TextItalic.TextOutdent.TextStrikethrough.TextT.TextUnderline.Textbox.Thermometer.ThermometerCold.ThermometerHot.ThermometerSimple.ThumbsDown.ThumbsUp.Ticket.TidalLogo.TiktokLogo.Timer.Tipi.ToggleLeft.ToggleRight.Toilet.ToiletPaper.Toolbox.Tooth.Tote.ToteSimple.Trademark.TrademarkRegistered.TrafficCone.TrafficSign.TrafficSignal.Train.TrainRegional.TrainSimple.Tram.Translate.Trash.TrashSimple.Tray.Tree.TreeEvergreen.TreePalm.TreeStructure.TrendDown.TrendUp.Triangle.Trophy.Truck.TwitchLogo.TwitterLogo.Umbrella.UmbrellaSimple.Unite.UniteSquare.Upload.UploadSimple.Usb.User.UserCircle.UserCircleGear.UserCircleMinus.UserCirclePlus.UserFocus.UserGear.UserList.UserMinus.UserPlus.UserRectangle.UserSquare.UserSwitch.Users.UsersFour.UsersThree.Van.Vault.Vibrate.Video.VideoCamera.VideoCameraSlash.Vignette.VinylRecord.VirtualReality.Virus.Voicemail.Volleyball.Wall.Wallet.Warehouse.Warning.WarningCircle.WarningDiamond.WarningOctagon.Watch.WaveSawtooth.WaveSine.WaveSquare.WaveTriangle.Waveform.Waves.Webcam.WebcamSlash.WebhooksLogo.WechatLogo.WhatsappLogo.Wheelchair.WheelchairMotion.WifiHigh.WifiLow.WifiMedium.WifiNone.WifiSlash.WifiX.Wind.WindowsLogo.Wine.Wrench.X.XCircle.XSquare.YinYang.YoutubeLogo`.split(
          `.`
        )),
      (vt = `https://framer.com/m/phosphor-icons/`),
      (yt = [`thin`, `light`, `regular`, `bold`, `fill`, `duotone`]),
      (bt = _t.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (X.displayName = `Phosphor`),
      (X.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `House`,
        iconSearch: `House`,
        color: `#66F`,
        selectByList: !0,
        weight: `regular`,
        mirrored: !1,
      }),
      T(X, {
        selectByList: {
          type: I.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: X.defaultProps.selectByList,
        },
        iconSelection: {
          type: I.Enum,
          options: _t,
          defaultValue: X.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Phosphor site](https://phosphoricons.com/)`,
        },
        iconSearch: {
          type: I.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        color: { type: I.Color, title: `Color`, defaultValue: X.defaultProps.color },
        weight: {
          type: I.Enum,
          title: `Weight`,
          optionTitles: yt.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
          options: yt,
          defaultValue: X.defaultProps.weight,
        },
        mirrored: {
          type: I.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: X.defaultProps.mirrored,
        },
        ...nt,
      }));
  }),
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Z,
  Mt = e(() => {
    (f(),
      E(),
      y(),
      h(),
      lt(),
      ht(),
      xt(),
      de(),
      re(),
      se(),
      (St = S(J)),
      (Ct = S(G)),
      (wt = S(X)),
      (Tt = `framer-7oue5`),
      (Et = { kDO2XDuCX: `framer-v-1oqaon5` }),
      (Dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ot = ({ value: e, children: n }) => {
        let r = t(_),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(_.Provider, { value: a, children: n });
      }),
      (kt = g.create(c)),
      (At = ({ height: e, id: t, link2: n, width: r, ...i }) => ({
        ...i,
        wza0KjmUA: n ?? i.wza0KjmUA,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = M(
        l(function (e, t) {
          let n = s(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = L();
          te();
          let { style: l, className: u, layoutId: f, variant: h, wza0KjmUA: _, ...y } = At(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ee,
              setVariant: O,
              variants: k,
            } = ne({ defaultVariant: `kDO2XDuCX`, ref: r, variant: h, variantClassNames: Et }),
            A = jt(e, k),
            { activeVariantCallback: j, delay: M } = z(b),
            N = j(async (...e) => {
              O(`kDO2XDuCX`);
            }),
            P = w(Tt, me, oe, ue);
          return d(v, {
            id: f ?? i,
            children: d(kt, {
              animate: k,
              initial: !1,
              children: d(Ot, {
                value: Dt,
                children: d(g.div, {
                  ...y,
                  ...T,
                  className: w(P, `framer-1oqaon5`, u, S),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `kDO2XDuCX`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `0px`,
                    "--border-color": `var(--token-ec4e9f3e-a8f1-4aed-ba0d-1d0591c8f7c0, rgba(0, 0, 0, 0.2))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    ...l,
                  },
                  children: d(g.div, {
                    className: `framer-agpfov`,
                    "data-framer-name": `Inner`,
                    layoutDependency: A,
                    layoutId: `iN9CcQVDk`,
                    children: p(g.div, {
                      className: `framer-1ebc3e6`,
                      "data-framer-name": `Details`,
                      layoutDependency: A,
                      layoutId: `yJfuo469P`,
                      children: [
                        d(R, {
                          children: d(x, {
                            className: `framer-1tvrncw-container`,
                            isAuthoredByUser: !0,
                            layoutDependency: A,
                            layoutId: `qz2oLUtGM-container`,
                            nodeId: `qz2oLUtGM`,
                            rendersWithMotion: !0,
                            scopeId: `dsl6KmnJt`,
                            children: d(J, {
                              borderRadius: 8,
                              bottomLeftRadius: 8,
                              bottomRightRadius: 8,
                              button: {
                                color: `rgb(255, 255, 255)`,
                                fill: `rgb(0, 0, 0)`,
                                fontWeight: 600,
                                label: `Submit`,
                              },
                              email: { placeholder: `Email`, value: `` },
                              font: !1,
                              fontFamily: `Inter`,
                              fontSize: 16,
                              fontWeight: 400,
                              formId: ``,
                              gap: 15,
                              height: `100%`,
                              id: `qz2oLUtGM`,
                              inputs: {
                                color: `rgb(0, 0, 0)`,
                                error: `rgb(238, 68, 68)`,
                                fill: `rgb(235, 235, 235)`,
                                placeholderColor: `rgba(0, 0, 0, 0.5)`,
                              },
                              isMixedBorderRadius: !1,
                              layout: `horizontal`,
                              layoutId: `qz2oLUtGM`,
                              message: { placeholder: `Message`, value: `` },
                              nameField: { placeholder: `Name`, value: `` },
                              padding: 15,
                              paddingBottom: 15,
                              paddingLeft: 15,
                              paddingPerSide: !1,
                              paddingRight: 15,
                              paddingTop: 15,
                              style: { height: `100%`, width: `100%` },
                              topLeftRadius: 8,
                              topRightRadius: 8,
                              width: `100%`,
                              withEmail: !0,
                              withMessage: !0,
                              withName: !0,
                            }),
                          }),
                        }),
                        p(g.div, {
                          className: `framer-1wq6gbo`,
                          "data-framer-name": `Content`,
                          layoutDependency: A,
                          layoutId: `iG80yBIdy`,
                          children: [
                            d(H, {
                              __fromCanvasComponent: !0,
                              children: d(c, {
                                children: d(g.h4, {
                                  className: `framer-styles-preset-hoiers`,
                                  "data-styles-preset": `N18bdSy5Z`,
                                  children: `We're ready to transform your vision into a unique and captivating space!`,
                                }),
                              }),
                              className: `framer-qh1bl7`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `fgqYoWZ8h`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            p(g.div, {
                              className: `framer-14cbaov`,
                              "data-framer-name": `List`,
                              layoutDependency: A,
                              layoutId: `ACo_fznGz`,
                              children: [
                                d(F, {
                                  href: `https://www.google.com/maps/place/A.A.Z+ENGINEERING+CO/@18.5158165,73.8433539,15z/data=!3m1!4b1!4m9!1m2!2m1!1s1st+floor,+office+no+9,+1043%2F44,+Aman+Plaza,+Raviwar+Peth,+Pune-+411002!3m5!1s0x3bc2c06902b86e3b:0x9936896b5095024f!8m2!3d18.515797!4d73.861808!16s%2Fg%2F1pp2wzjr0?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D`,
                                  motionChild: !0,
                                  nodeId: `Up5yBP_xN`,
                                  openInNewTab: !0,
                                  scopeId: `dsl6KmnJt`,
                                  children: p(g.a, {
                                    className: `framer-1t5knet framer-16wrqde`,
                                    "data-framer-name": `Address`,
                                    layoutDependency: A,
                                    layoutId: `Up5yBP_xN`,
                                    children: [
                                      d(R, {
                                        children: d(x, {
                                          className: `framer-vdbd0c-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          layoutDependency: A,
                                          layoutId: `BOlobP9s0-container`,
                                          nodeId: `BOlobP9s0`,
                                          rendersWithMotion: !0,
                                          scopeId: `dsl6KmnJt`,
                                          children: d(G, {
                                            color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `House`,
                                            id: `BOlobP9s0`,
                                            layoutId: `BOlobP9s0`,
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            weight: `regular`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: d(g.p, {
                                            style: {
                                              "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0)))`,
                                            },
                                            children: `1st floor, office no 9, 1043/44, Aman Plaza, Raviwar Peth, Pune- 411002`,
                                          }),
                                        }),
                                        className: `framer-1gl72tl`,
                                        fonts: [`GF;Oxygen-regular`],
                                        layoutDependency: A,
                                        layoutId: `GjBh6U2m2`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                                d(g.div, {
                                  className: `framer-1kz0nv5`,
                                  layoutDependency: A,
                                  layoutId: `vnVqsuqzR`,
                                  children: d(F, {
                                    href: _,
                                    motionChild: !0,
                                    nodeId: `oSum8qXmL`,
                                    openInNewTab: !1,
                                    scopeId: `dsl6KmnJt`,
                                    children: p(g.a, {
                                      className: `framer-kppyhe framer-16wrqde`,
                                      "data-framer-name": `Phone`,
                                      layoutDependency: A,
                                      layoutId: `oSum8qXmL`,
                                      children: [
                                        d(R, {
                                          children: d(x, {
                                            className: `framer-6qc09x-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            layoutDependency: A,
                                            layoutId: `IZxJz7YFk-container`,
                                            nodeId: `IZxJz7YFk`,
                                            rendersWithMotion: !0,
                                            scopeId: `dsl6KmnJt`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Phone`,
                                              id: `IZxJz7YFk`,
                                              layoutId: `IZxJz7YFk`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(g.div, {
                                          className: `framer-1wkduxl`,
                                          layoutDependency: A,
                                          layoutId: `qmdFUym0A`,
                                          children: d(H, {
                                            __fromCanvasComponent: !0,
                                            children: p(c, {
                                              children: [
                                                d(g.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0)))`,
                                                  },
                                                  children: `Ali Akber`,
                                                }),
                                                d(g.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-2gxw0f, var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0)))`,
                                                  },
                                                  children: `Ali Asger`,
                                                }),
                                                d(g.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                    "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                    "--framer-line-height": `1.4em`,
                                                    "--framer-text-color": `var(--extracted-1iakedh, var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0)))`,
                                                  },
                                                  children: `Burhanuddin`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-17q1aax`,
                                            "data-framer-name": `@aaztoolsco`,
                                            "data-highlight": !0,
                                            fonts: [`GF;Oxygen-regular`],
                                            layoutDependency: A,
                                            layoutId: `QH7ldg0Lw`,
                                            onTap: N,
                                            style: {
                                              "--extracted-1iakedh": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              "--extracted-2gxw0f": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              "--extracted-r6o4lv": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                        p(g.div, {
                                          className: `framer-16kc9op`,
                                          layoutDependency: A,
                                          layoutId: `D8E8N9zu9`,
                                          children: [
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(g.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.69))`,
                                                  },
                                                  children: d(F, {
                                                    href: `tel:9370277342`,
                                                    motionChild: !0,
                                                    nodeId: `P8Q7SIWEj`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `dsl6KmnJt`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `9370277342`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-14ykziw`,
                                              fonts: [`Inter`],
                                              layoutDependency: A,
                                              layoutId: `P8Q7SIWEj`,
                                              style: {
                                                "--extracted-r6o4lv": `rgba(0, 0, 0, 0.69)`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(g.p, {
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.69))`,
                                                  },
                                                  children: d(F, {
                                                    href: `tel:9372444866`,
                                                    motionChild: !0,
                                                    nodeId: `ZaxpHYTGX`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `dsl6KmnJt`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `9372444866`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1cth258`,
                                              fonts: [`Inter`],
                                              layoutDependency: A,
                                              layoutId: `ZaxpHYTGX`,
                                              style: {
                                                "--extracted-r6o4lv": `rgba(0, 0, 0, 0.69)`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(g.p, {
                                                  className: `framer-styles-preset-1qkreg9`,
                                                  "data-styles-preset": `ROHSdZbe7`,
                                                  dir: `auto`,
                                                  children: d(F, {
                                                    href: `tel:7507949522`,
                                                    motionChild: !0,
                                                    nodeId: `rSPBSUPVW`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `dsl6KmnJt`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `7507949522`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-xuiv7a`,
                                              fonts: [`Inter`],
                                              layoutDependency: A,
                                              layoutId: `rSPBSUPVW`,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                                d(F, {
                                  href: `aaztoolsco@hotmail.com`,
                                  motionChild: !0,
                                  nodeId: `jiteS9izI`,
                                  openInNewTab: !0,
                                  scopeId: `dsl6KmnJt`,
                                  children: p(g.a, {
                                    className: `framer-1h5d0lh framer-16wrqde`,
                                    "data-framer-name": `Email`,
                                    layoutDependency: A,
                                    layoutId: `jiteS9izI`,
                                    children: [
                                      d(R, {
                                        children: d(x, {
                                          className: `framer-tstolh-container`,
                                          isAuthoredByUser: !0,
                                          layoutDependency: A,
                                          layoutId: `YvTEUSOuF-container`,
                                          nodeId: `YvTEUSOuF`,
                                          rendersWithMotion: !0,
                                          scopeId: `dsl6KmnJt`,
                                          children: d(X, {
                                            color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `Envelope`,
                                            id: `YvTEUSOuF`,
                                            layoutId: `YvTEUSOuF`,
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            weight: `regular`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: d(g.p, {
                                            style: {
                                              "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0)))`,
                                            },
                                            children: d(F, {
                                              href: `aaztoolsco@hotmail.com`,
                                              motionChild: !0,
                                              nodeId: `jwUTRjBm7`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `dsl6KmnJt`,
                                              smoothScroll: !1,
                                              children: d(g.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: ` aaztoolsco@hotmail.com`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-5zxgd5`,
                                        fonts: [`GF;Oxygen-regular`],
                                        layoutDependency: A,
                                        layoutId: `jwUTRjBm7`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                                d(F, {
                                  href: `https://www.instagram.com/aaztoolsco?igsh=ZjJuamNsdW15Ymtm`,
                                  motionChild: !0,
                                  nodeId: `BH4gderoZ`,
                                  openInNewTab: !0,
                                  scopeId: `dsl6KmnJt`,
                                  smoothScroll: !1,
                                  children: p(g.a, {
                                    className: `framer-k8shrh framer-16wrqde`,
                                    "data-framer-name": `insta`,
                                    layoutDependency: A,
                                    layoutId: `BH4gderoZ`,
                                    children: [
                                      d(R, {
                                        children: d(x, {
                                          className: `framer-1o28v9o-container`,
                                          isAuthoredByUser: !0,
                                          layoutDependency: A,
                                          layoutId: `ibmQnuke9-container`,
                                          nodeId: `ibmQnuke9`,
                                          rendersWithMotion: !0,
                                          scopeId: `dsl6KmnJt`,
                                          children: d(X, {
                                            color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                            height: `100%`,
                                            iconSearch: `instagram`,
                                            iconSelection: `Envelope`,
                                            id: `ibmQnuke9`,
                                            layoutId: `ibmQnuke9`,
                                            mirrored: !1,
                                            selectByList: !1,
                                            style: { height: `100%`, width: `100%` },
                                            weight: `regular`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: d(c, {
                                          children: d(g.p, {
                                            style: {
                                              "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                              "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                              "--framer-line-height": `1.4em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0)))`,
                                            },
                                            children: ` @aaztoolsco`,
                                          }),
                                        }),
                                        className: `framer-1s65c1o`,
                                        "data-framer-name": `@aaztoolsco`,
                                        "data-highlight": !0,
                                        fonts: [`GF;Oxygen-regular`],
                                        layoutDependency: A,
                                        layoutId: `Vb5wbhAe_`,
                                        onTap: N,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-7oue5.framer-16wrqde, .framer-7oue5 .framer-16wrqde { display: block; }`,
          `.framer-7oue5.framer-1oqaon5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 50px 100px 50px; position: relative; width: 1200px; }`,
          `.framer-7oue5 .framer-agpfov { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-7oue5 .framer-1ebc3e6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-7oue5 .framer-1tvrncw-container { aspect-ratio: 1.3125 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 400px); position: relative; width: 1px; }`,
          `.framer-7oue5 .framer-1wq6gbo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-7oue5 .framer-qh1bl7, .framer-7oue5 .framer-14ykziw, .framer-7oue5 .framer-1cth258, .framer-7oue5 .framer-xuiv7a { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7oue5 .framer-14cbaov { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; }`,
          `.framer-7oue5 .framer-1t5knet, .framer-7oue5 .framer-1h5d0lh, .framer-7oue5 .framer-k8shrh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
          `.framer-7oue5 .framer-vdbd0c-container, .framer-7oue5 .framer-6qc09x-container, .framer-7oue5 .framer-tstolh-container, .framer-7oue5 .framer-1o28v9o-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-7oue5 .framer-1gl72tl, .framer-7oue5 .framer-5zxgd5 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7oue5 .framer-1kz0nv5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 80px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 263px; }`,
          `.framer-7oue5 .framer-kppyhe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 263px; }`,
          `.framer-7oue5 .framer-1wkduxl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-7oue5 .framer-17q1aax, .framer-7oue5 .framer-1s65c1o { cursor: pointer; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-7oue5 .framer-16kc9op { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          ...fe,
          ...ie,
          ...ce,
          `.framer-7oue5[data-border="true"]::after, .framer-7oue5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-7oue5`
      )),
      (Z.displayName = `Contact Form`),
      (Z.defaultProps = { height: 600, width: 1200 }),
      T(Z, { wza0KjmUA: { title: `Link 2`, type: I.Link } }),
      V(
        Z,
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
              {
                cssFamilyName: `Oxygen`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Oxygen`,
                url: `https://fonts.gstatic.com/s/oxygen/v16/2sDfZG1Wl4Lcnbu6jEcnZ0SkAg.woff2`,
                weight: `400`,
              },
            ],
          },
          ...St,
          ...Ct,
          ...wt,
          ...C(pe),
          ...C(ae),
          ...C(le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Q,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  $,
  Gt;
e(() => {
  (f(),
    E(),
    y(),
    h(),
    Ge(),
    lt(),
    ft(),
    Mt(),
    de(),
    re(),
    he(),
    se(),
    be(),
    (Nt = S(We)),
    (Pt = S(K)),
    (Ft = S(G)),
    (It = S(Z)),
    (Lt = {
      KctfEkezH: `(max-width: 809.98px)`,
      MPYDmolf6: `(min-width: 1200px)`,
      XfHmxuNa6: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Q = () => typeof document < `u`),
    (Rt = []),
    (zt = `framer-c40tA`),
    (Bt = {
      KctfEkezH: `framer-v-1oqmhp4`,
      MPYDmolf6: `framer-v-9hptyy`,
      XfHmxuNa6: `framer-v-gd3up6`,
    }),
    (Vt = (e, t, n) => (e && t ? `position` : n)),
    (Ht = { Desktop: `MPYDmolf6`, Phone: `KctfEkezH`, Tablet: `XfHmxuNa6` }),
    (Ut = ({ value: e }) =>
      P()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Wt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ht[r.variant] ?? r.variant ?? `MPYDmolf6`,
    })),
    ($ = M(
      l(function (e, n) {
        let r = s(null),
          i = n ?? r,
          a = m(),
          { activeLocale: o, setLocale: l } = L(),
          f = te(),
          { style: h, className: y, layoutId: b, variant: x, ...S } = Wt(e);
        O(u(() => ye({}, o), [o]));
        let [C, T] = D(x, Lt, !1),
          E = w(zt, ve, me, oe, ue),
          j = t(ee)?.isLayoutTemplate,
          M = !!t(_)?.transition?.layout,
          P = Vt(j, M),
          ne = () => !Q() || C === `KctfEkezH`,
          I = () => !Q() || C !== `KctfEkezH`,
          z = () => !Q() || C === `XfHmxuNa6`,
          B = () => !Q() || ![`XfHmxuNa6`, `KctfEkezH`].includes(C);
        return (
          A({}),
          d(ee.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Ht,
              primaryVariantId: `MPYDmolf6`,
              variantClassNames: Bt,
            },
            children: p(v, {
              id: b ?? a,
              children: [
                d(Ut, { value: `html body { background: rgb(255, 255, 255); }` }),
                p(g.div, {
                  ...S,
                  className: w(E, `framer-9hptyy`, y),
                  ref: i,
                  style: { ...h },
                  children: [
                    d(g.div, {
                      className: `framer-69p708`,
                      "data-framer-name": `Contact Us`,
                      layout: P,
                      children: d(`div`, {
                        className: `framer-7qixgj`,
                        "data-framer-name": `Inner`,
                        children: p(`div`, {
                          className: `framer-1s2jbmz`,
                          "data-framer-name": `Section Title`,
                          children: [
                            d(H, {
                              __fromCanvasComponent: !0,
                              children: d(c, {
                                children: d(`p`, {
                                  style: {
                                    "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                    "--framer-font-size": `14px`,
                                    "--framer-text-color": `rgb(189, 145, 82)`,
                                  },
                                  children: `Get in Touch with Us`,
                                }),
                              }),
                              className: `framer-whg2tr`,
                              fonts: [`GF;Oxygen-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(k, {
                              breakpoint: C,
                              overrides: {
                                KctfEkezH: {
                                  children: d(c, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                      children: `Reach out today, and let's start turning your vision into reality.`,
                                    }),
                                  }),
                                },
                                XfHmxuNa6: {
                                  children: d(c, {
                                    children: d(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      style: { "--framer-text-color": `rgb(0, 0, 0)` },
                                      children: `Reach out today, and let's start turning your vision into reality.`,
                                    }),
                                  }),
                                },
                              },
                              children: d(H, {
                                __fromCanvasComponent: !0,
                                children: d(c, {
                                  children: d(`h3`, {
                                    className: `framer-styles-preset-1d7ew99`,
                                    "data-styles-preset": `nl385Jssa`,
                                    children: `Reach out today, and let's start turning your vision into reality.`,
                                  }),
                                }),
                                className: `framer-1jraxhn`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    d(g.div, {
                      className: `framer-h3hhj4`,
                      layout: P,
                      children: d(R, {
                        children: d(N, {
                          className: `framer-1rx93d4-container`,
                          isModuleExternal: !0,
                          nodeId: `mlA86Lv46`,
                          scopeId: `AIJK2IvNV`,
                          children: d(We, {
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            coordinates: `no. 9, Aman Plaza, 1st floor, off, 1043/44, Raviwar Peth, Pune, Maharashtra 411002`,
                            height: `100%`,
                            id: `mlA86Lv46`,
                            isMixedBorderRadius: !1,
                            layoutId: `mlA86Lv46`,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            width: `100%`,
                            zoom: 15,
                          }),
                        }),
                      }),
                    }),
                    ne() &&
                      p(g.div, {
                        className: `framer-1rk1eo5 hidden-9hptyy hidden-gd3up6`,
                        "data-framer-name": `Details`,
                        layout: P,
                        children: [
                          d(R, {
                            children: d(N, {
                              className: `framer-1u5rhsi-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `sES7amgNY`,
                              scopeId: `AIJK2IvNV`,
                              children: d(K, {
                                borderRadius: 8,
                                bottomLeftRadius: 8,
                                bottomRightRadius: 8,
                                button: {
                                  color: `rgb(255, 255, 255)`,
                                  fill: `rgb(0, 0, 0)`,
                                  fontWeight: 600,
                                  label: `Submit`,
                                },
                                email: { placeholder: `Email`, value: `` },
                                font: !1,
                                fontFamily: `Inter`,
                                fontSize: 16,
                                fontWeight: 400,
                                formId: ``,
                                gap: 15,
                                height: `100%`,
                                id: `sES7amgNY`,
                                inputs: {
                                  color: `rgb(0, 0, 0)`,
                                  error: `rgb(238, 68, 68)`,
                                  fill: `rgb(235, 235, 235)`,
                                  placeholderColor: `rgba(0, 0, 0, 0.5)`,
                                },
                                isMixedBorderRadius: !1,
                                layout: `vertical`,
                                layoutId: `sES7amgNY`,
                                message: { placeholder: `Message`, value: `` },
                                nameField: { placeholder: `Name`, value: `` },
                                padding: 15,
                                paddingBottom: 15,
                                paddingLeft: 15,
                                paddingPerSide: !1,
                                paddingRight: 15,
                                paddingTop: 15,
                                style: { height: `100%`, width: `100%` },
                                topLeftRadius: 8,
                                topRightRadius: 8,
                                width: `100%`,
                                withEmail: !0,
                                withMessage: !0,
                                withName: !0,
                              }),
                            }),
                          }),
                          p(`div`, {
                            className: `framer-1p2hebc`,
                            "data-framer-name": `Content`,
                            children: [
                              d(H, {
                                __fromCanvasComponent: !0,
                                children: d(c, {
                                  children: d(`h4`, {
                                    className: `framer-styles-preset-hoiers`,
                                    "data-styles-preset": `N18bdSy5Z`,
                                    children: `We're ready to transform your vision into a unique and captivating space!`,
                                  }),
                                }),
                                className: `framer-1pq6dcl`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              p(`div`, {
                                className: `framer-18c7euu`,
                                "data-framer-name": `List`,
                                children: [
                                  d(F, {
                                    href: `https://www.google.com/maps/place/A.A.Z+ENGINEERING+CO/@18.5158165,73.8433539,15z/data=!3m1!4b1!4m9!1m2!2m1!1s1st+floor,+office+no+9,+1043%2F44,+Aman+Plaza,+Raviwar+Peth,+Pune-+411002!3m5!1s0x3bc2c06902b86e3b:0x9936896b5095024f!8m2!3d18.515797!4d73.861808!16s%2Fg%2F1pp2wzjr0?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D`,
                                    motionChild: !0,
                                    nodeId: `XMGadWxwF`,
                                    openInNewTab: !0,
                                    scopeId: `AIJK2IvNV`,
                                    children: p(g.a, {
                                      className: `framer-1clqurr framer-xu5vm2`,
                                      "data-framer-name": `Address`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-1142l0a-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `L6QjYLklB`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `House`,
                                              id: `L6QjYLklB`,
                                              layoutId: `L6QjYLklB`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: d(c, {
                                            children: d(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `1st floor, office no 9, 1043/44, Aman Plaza, Raviwar Peth, Pune- 411002`,
                                            }),
                                          }),
                                          className: `framer-aabmzq`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  p(`div`, {
                                    className: `framer-idtqlw`,
                                    "data-framer-name": `Phone`,
                                    children: [
                                      d(R, {
                                        children: d(N, {
                                          className: `framer-wda46z-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `uIACQDGZd`,
                                          scopeId: `AIJK2IvNV`,
                                          children: d(G, {
                                            color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `Phone`,
                                            id: `uIACQDGZd`,
                                            layoutId: `uIACQDGZd`,
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            weight: `regular`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      d(H, {
                                        __fromCanvasComponent: !0,
                                        children: p(c, {
                                          children: [
                                            d(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `Ali Akber`,
                                            }),
                                            d(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `0.8em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `Ali Asger`,
                                            }),
                                            d(`p`, {
                                              dir: `auto`,
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `Burhanuddin`,
                                            }),
                                          ],
                                        }),
                                        className: `framer-c55z5`,
                                        "data-framer-name": `@aaztoolsco`,
                                        fonts: [`GF;Oxygen-regular`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      p(`div`, {
                                        className: `framer-1j2ynhp`,
                                        children: [
                                          d(H, {
                                            __fromCanvasComponent: !0,
                                            children: d(c, {
                                              children: d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                },
                                                children: d(F, {
                                                  href: `tel:9370277342`,
                                                  motionChild: !0,
                                                  nodeId: `vPX68oQ5n`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `AIJK2IvNV`,
                                                  smoothScroll: !1,
                                                  children: d(g.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `9370277342`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-11ti2dk`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(H, {
                                            __fromCanvasComponent: !0,
                                            children: d(c, {
                                              children: d(`p`, {
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                },
                                                children: d(F, {
                                                  href: `tel:9372444866`,
                                                  motionChild: !0,
                                                  nodeId: `i_UzgcTqh`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `AIJK2IvNV`,
                                                  smoothScroll: !1,
                                                  children: d(g.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `9372444866`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-1pleekj`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(H, {
                                            __fromCanvasComponent: !0,
                                            children: d(c, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-1qkreg9`,
                                                "data-styles-preset": `ROHSdZbe7`,
                                                dir: `auto`,
                                                children: d(F, {
                                                  href: `tel:7507949522`,
                                                  motionChild: !0,
                                                  nodeId: `BecqgEZ42`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `AIJK2IvNV`,
                                                  smoothScroll: !1,
                                                  children: d(g.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `7507949522`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-17iaf6v`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  I() &&
                                    p(`div`, {
                                      className: `framer-1qfaefk hidden-1oqmhp4`,
                                      "data-framer-name": `Phone`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-whzm5y-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `IVw5b1Slw`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Phone`,
                                              id: `IVw5b1Slw`,
                                              layoutId: `IVw5b1Slw`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: p(c, {
                                            children: [
                                              d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                },
                                                children: `Ali Akber`,
                                              }),
                                              d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                  "--framer-line-height": `0.8em`,
                                                  "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                },
                                                children: `Ali Asger`,
                                              }),
                                              d(`p`, {
                                                dir: `auto`,
                                                style: {
                                                  "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                  "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                  "--framer-line-height": `1.4em`,
                                                  "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                },
                                                children: `Burhanuddin`,
                                              }),
                                            ],
                                          }),
                                          className: `framer-1xc57cj`,
                                          "data-framer-name": `@aaztoolsco`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        p(`div`, {
                                          className: `framer-vblp68`,
                                          children: [
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                  },
                                                  children: d(F, {
                                                    href: `tel:9370277342`,
                                                    motionChild: !0,
                                                    nodeId: `urOMkdl5Y`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `AIJK2IvNV`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `9370277342`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-arsbge`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(`p`, {
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                  },
                                                  children: d(F, {
                                                    href: `tel:9372444866`,
                                                    motionChild: !0,
                                                    nodeId: `ehmPsMjBG`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `AIJK2IvNV`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `9372444866`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-hlukh0`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-1qkreg9`,
                                                  "data-styles-preset": `ROHSdZbe7`,
                                                  dir: `auto`,
                                                  children: d(F, {
                                                    href: `tel:7507949522`,
                                                    motionChild: !0,
                                                    nodeId: `oyruFo2N5`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `AIJK2IvNV`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `7507949522`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-13j9s6m`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  I() &&
                                    p(`div`, {
                                      className: `framer-r4o2vs hidden-1oqmhp4`,
                                      "data-framer-name": `Phone`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-1a5itbg-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `OCGMOYHXT`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Phone`,
                                              id: `OCGMOYHXT`,
                                              layoutId: `OCGMOYHXT`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        p(`div`, {
                                          className: `framer-a1gm8q`,
                                          children: [
                                            p(`div`, {
                                              className: `framer-1gctmps`,
                                              "data-framer-name": `Phone`,
                                              children: [
                                                d(R, {
                                                  children: d(N, {
                                                    className: `framer-15oppzz-container`,
                                                    isAuthoredByUser: !0,
                                                    isModuleExternal: !0,
                                                    nodeId: `wig5xRLKV`,
                                                    scopeId: `AIJK2IvNV`,
                                                    children: d(G, {
                                                      color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                      height: `100%`,
                                                      iconSearch: `House`,
                                                      iconSelection: `Phone`,
                                                      id: `wig5xRLKV`,
                                                      layoutId: `wig5xRLKV`,
                                                      mirrored: !1,
                                                      selectByList: !0,
                                                      style: { height: `100%`, width: `100%` },
                                                      weight: `regular`,
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                                d(H, {
                                                  __fromCanvasComponent: !0,
                                                  children: p(c, {
                                                    children: [
                                                      d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                          "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                          "--framer-line-height": `1.4em`,
                                                          "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                        },
                                                        children: `Ali Akber`,
                                                      }),
                                                      d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                          "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                          "--framer-line-height": `0.8em`,
                                                          "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                        },
                                                        children: `Ali Asger`,
                                                      }),
                                                      d(`p`, {
                                                        dir: `auto`,
                                                        style: {
                                                          "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                          "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                          "--framer-line-height": `1.4em`,
                                                          "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                        },
                                                        children: `Burhanuddin`,
                                                      }),
                                                    ],
                                                  }),
                                                  className: `framer-12zkbcc`,
                                                  "data-framer-name": `@aaztoolsco`,
                                                  fonts: [`GF;Oxygen-regular`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                p(`div`, {
                                                  className: `framer-1kdy0hz`,
                                                  children: [
                                                    d(H, {
                                                      __fromCanvasComponent: !0,
                                                      children: d(c, {
                                                        children: d(`p`, {
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-font-size": `14px`,
                                                            "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                          },
                                                          children: d(F, {
                                                            href: `tel:9370277342`,
                                                            motionChild: !0,
                                                            nodeId: `bHAtaNiTt`,
                                                            openInNewTab: !0,
                                                            relValues: [],
                                                            scopeId: `AIJK2IvNV`,
                                                            smoothScroll: !1,
                                                            children: d(g.a, {
                                                              className: `framer-styles-preset-qywj9v`,
                                                              "data-styles-preset": `nBjcbhcMb`,
                                                              children: `9370277342`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      className: `framer-843xx1`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    d(H, {
                                                      __fromCanvasComponent: !0,
                                                      children: d(c, {
                                                        children: d(`p`, {
                                                          style: {
                                                            "--framer-font-size": `14px`,
                                                            "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                          },
                                                          children: d(F, {
                                                            href: `tel:9372444866`,
                                                            motionChild: !0,
                                                            nodeId: `cmPQm2aky`,
                                                            openInNewTab: !0,
                                                            relValues: [],
                                                            scopeId: `AIJK2IvNV`,
                                                            smoothScroll: !1,
                                                            children: d(g.a, {
                                                              className: `framer-styles-preset-qywj9v`,
                                                              "data-styles-preset": `nBjcbhcMb`,
                                                              children: `9372444866`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      className: `framer-1gwjuwb`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    d(H, {
                                                      __fromCanvasComponent: !0,
                                                      children: d(c, {
                                                        children: d(`p`, {
                                                          className: `framer-styles-preset-1qkreg9`,
                                                          "data-styles-preset": `ROHSdZbe7`,
                                                          dir: `auto`,
                                                          children: d(F, {
                                                            href: `tel:7507949522`,
                                                            motionChild: !0,
                                                            nodeId: `mOJXtvEUC`,
                                                            openInNewTab: !0,
                                                            relValues: [],
                                                            scopeId: `AIJK2IvNV`,
                                                            smoothScroll: !1,
                                                            children: d(g.a, {
                                                              className: `framer-styles-preset-qywj9v`,
                                                              "data-styles-preset": `nBjcbhcMb`,
                                                              children: `7507949522`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                      className: `framer-1xey5t0`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            d(R, {
                                              children: d(N, {
                                                className: `framer-1qunwkv-container`,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                nodeId: `b30YBFbGU`,
                                                scopeId: `AIJK2IvNV`,
                                                children: d(G, {
                                                  color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                                  height: `100%`,
                                                  iconSearch: `House`,
                                                  iconSelection: `Phone`,
                                                  id: `b30YBFbGU`,
                                                  layoutId: `b30YBFbGU`,
                                                  mirrored: !1,
                                                  selectByList: !0,
                                                  style: { height: `100%`, width: `100%` },
                                                  weight: `regular`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(`p`, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                  },
                                                  children: d(F, {
                                                    href: `tel:9370277342`,
                                                    motionChild: !0,
                                                    nodeId: `ibXQ6Nk4C`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `AIJK2IvNV`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `9370277342`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-7xl73h`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(`p`, {
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                  },
                                                  children: d(F, {
                                                    href: `tel:9372444866`,
                                                    motionChild: !0,
                                                    nodeId: `P6hlquCVS`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `AIJK2IvNV`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `9372444866`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-mbhxch`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            d(H, {
                                              __fromCanvasComponent: !0,
                                              children: d(c, {
                                                children: d(`p`, {
                                                  className: `framer-styles-preset-1qkreg9`,
                                                  "data-styles-preset": `ROHSdZbe7`,
                                                  children: d(F, {
                                                    href: `tel:7507949522`,
                                                    motionChild: !0,
                                                    nodeId: `yx9GiATem`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `AIJK2IvNV`,
                                                    smoothScroll: !1,
                                                    children: d(g.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `7507949522`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1elzyeo`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  d(F, {
                                    href: ` aaztoolsco@hotmail.com`,
                                    motionChild: !0,
                                    nodeId: `IHiNaVyXU`,
                                    openInNewTab: !0,
                                    scopeId: `AIJK2IvNV`,
                                    children: p(g.a, {
                                      className: `framer-5vfgxo framer-xu5vm2`,
                                      "data-framer-name": `Email`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-j4pbiw-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `hXj5fXJxR`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Envelope`,
                                              id: `hXj5fXJxR`,
                                              layoutId: `hXj5fXJxR`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: d(c, {
                                            children: d(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `aaztoolsco@hotmail.com`,
                                            }),
                                          }),
                                          className: `framer-11lnmh4`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  d(F, {
                                    href: `https://www.instagram.com/aaztoolsco?igsh=ZjJuamNsdW15Ymtm`,
                                    motionChild: !0,
                                    nodeId: `LWtlZ8GtI`,
                                    openInNewTab: !0,
                                    scopeId: `AIJK2IvNV`,
                                    children: p(g.a, {
                                      className: `framer-1rxkzpr framer-xu5vm2`,
                                      "data-framer-name": `Insta`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-n1jgjv-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `G1tW8eBpI`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `InstagramLogo`,
                                              id: `G1tW8eBpI`,
                                              layoutId: `G1tW8eBpI`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: d(c, {
                                            children: d(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `@aaztoolsco`,
                                            }),
                                          }),
                                          className: `framer-1kkuon2`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    z() &&
                      p(g.div, {
                        className: `framer-11s8kl2 hidden-9hptyy hidden-1oqmhp4`,
                        "data-framer-name": `Details`,
                        layout: P,
                        children: [
                          d(R, {
                            children: d(N, {
                              className: `framer-7v5v0e-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `VxBTO53CG`,
                              scopeId: `AIJK2IvNV`,
                              children: d(K, {
                                borderRadius: 8,
                                bottomLeftRadius: 8,
                                bottomRightRadius: 8,
                                button: {
                                  color: `rgb(255, 255, 255)`,
                                  fill: `rgb(0, 0, 0)`,
                                  fontWeight: 600,
                                  label: `Submit`,
                                },
                                email: { placeholder: `Email`, value: `` },
                                font: !1,
                                fontFamily: `Inter`,
                                fontSize: 16,
                                fontWeight: 400,
                                formId: ``,
                                gap: 15,
                                height: `100%`,
                                id: `VxBTO53CG`,
                                inputs: {
                                  color: `rgb(0, 0, 0)`,
                                  error: `rgb(238, 68, 68)`,
                                  fill: `rgb(235, 235, 235)`,
                                  placeholderColor: `rgba(0, 0, 0, 0.5)`,
                                },
                                isMixedBorderRadius: !1,
                                layout: `horizontal`,
                                layoutId: `VxBTO53CG`,
                                message: { placeholder: `Message`, value: `` },
                                nameField: { placeholder: `Name`, value: `` },
                                padding: 15,
                                paddingBottom: 15,
                                paddingLeft: 15,
                                paddingPerSide: !1,
                                paddingRight: 15,
                                paddingTop: 15,
                                style: { height: `100%`, width: `100%` },
                                topLeftRadius: 8,
                                topRightRadius: 8,
                                width: `100%`,
                                withEmail: !0,
                                withMessage: !0,
                                withName: !0,
                              }),
                            }),
                          }),
                          p(`div`, {
                            className: `framer-188sy2p`,
                            "data-framer-name": `Content`,
                            children: [
                              d(H, {
                                __fromCanvasComponent: !0,
                                children: d(c, {
                                  children: d(`h4`, {
                                    className: `framer-styles-preset-hoiers`,
                                    "data-styles-preset": `N18bdSy5Z`,
                                    children: `We're ready to transform your vision into a unique and captivating space!`,
                                  }),
                                }),
                                className: `framer-1bryrss`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              p(`div`, {
                                className: `framer-x44269`,
                                "data-framer-name": `List`,
                                children: [
                                  d(F, {
                                    href: `https://www.google.com/maps/place/A.A.Z+ENGINEERING+CO/@18.5158165,73.8433539,15z/data=!3m1!4b1!4m9!1m2!2m1!1s1st+floor,+office+no+9,+1043%2F44,+Aman+Plaza,+Raviwar+Peth,+Pune-+411002!3m5!1s0x3bc2c06902b86e3b:0x9936896b5095024f!8m2!3d18.515797!4d73.861808!16s%2Fg%2F1pp2wzjr0?entry=ttu&g_ep=EgoyMDI1MTExNi4wIKXMDSoASAFQAw%3D%3D`,
                                    motionChild: !0,
                                    nodeId: `ZOHZ70tI_`,
                                    openInNewTab: !0,
                                    scopeId: `AIJK2IvNV`,
                                    children: p(g.a, {
                                      className: `framer-1hiilhh framer-xu5vm2`,
                                      "data-framer-name": `Address`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-195ipfl-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `ovrmkEFZ3`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `House`,
                                              id: `ovrmkEFZ3`,
                                              layoutId: `ovrmkEFZ3`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: d(c, {
                                            children: d(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `1st floor, office no 9, 1043/44, Aman Plaza, Raviwar Peth, Pune- 411002`,
                                            }),
                                          }),
                                          className: `framer-71tqcz`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  p(`div`, {
                                    className: `framer-r5k3c3`,
                                    "data-framer-name": `Phone`,
                                    children: [
                                      d(R, {
                                        children: d(N, {
                                          className: `framer-1p5brpl-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `E2FBZpg9R`,
                                          scopeId: `AIJK2IvNV`,
                                          children: d(G, {
                                            color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `Phone`,
                                            id: `E2FBZpg9R`,
                                            layoutId: `E2FBZpg9R`,
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: { height: `100%`, width: `100%` },
                                            weight: `regular`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      p(`div`, {
                                        className: `framer-h7g2c3`,
                                        children: [
                                          d(H, {
                                            __fromCanvasComponent: !0,
                                            children: d(c, {
                                              children: d(`p`, {
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                },
                                                children: d(F, {
                                                  href: `tel:9370277342`,
                                                  motionChild: !0,
                                                  nodeId: `F13VDEIXi`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `AIJK2IvNV`,
                                                  smoothScroll: !1,
                                                  children: d(g.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `9370277342`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-gs62ks`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(H, {
                                            __fromCanvasComponent: !0,
                                            children: d(c, {
                                              children: d(`p`, {
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `rgba(0, 0, 0, 0.69)`,
                                                },
                                                children: d(F, {
                                                  href: `tel:9372444866`,
                                                  motionChild: !0,
                                                  nodeId: `kC4JVxCto`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `AIJK2IvNV`,
                                                  smoothScroll: !1,
                                                  children: d(g.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `9372444866`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-jgxgoo`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(H, {
                                            __fromCanvasComponent: !0,
                                            children: d(c, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-1qkreg9`,
                                                "data-styles-preset": `ROHSdZbe7`,
                                                children: d(F, {
                                                  href: `tel:7507949522`,
                                                  motionChild: !0,
                                                  nodeId: `IxPs1EG6J`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `AIJK2IvNV`,
                                                  smoothScroll: !1,
                                                  children: d(g.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `7507949522`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-lkuny4`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(F, {
                                    href: ` aaztoolsco@hotmail.com`,
                                    motionChild: !0,
                                    nodeId: `GQnTCmKzp`,
                                    openInNewTab: !0,
                                    scopeId: `AIJK2IvNV`,
                                    children: p(g.a, {
                                      className: `framer-1ym65ar framer-xu5vm2`,
                                      "data-framer-name": `Email`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-1aqkuoy-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `kv7qtZQYY`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Envelope`,
                                              id: `kv7qtZQYY`,
                                              layoutId: `kv7qtZQYY`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: d(c, {
                                            children: d(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `aaztoolsco@hotmail.com`,
                                            }),
                                          }),
                                          className: `framer-1fwbu7v`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  d(F, {
                                    href: `https://www.instagram.com/aaztoolsco?igsh=ZjJuamNsdW15Ymtm`,
                                    motionChild: !0,
                                    nodeId: `sO1lZatZd`,
                                    openInNewTab: !0,
                                    scopeId: `AIJK2IvNV`,
                                    children: p(g.a, {
                                      className: `framer-19ycxql framer-xu5vm2`,
                                      "data-framer-name": `Insta`,
                                      children: [
                                        d(R, {
                                          children: d(N, {
                                            className: `framer-wf9m0p-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `sIG5f7mnk`,
                                            scopeId: `AIJK2IvNV`,
                                            children: d(G, {
                                              color: `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `InstagramLogo`,
                                              id: `sIG5f7mnk`,
                                              layoutId: `sIG5f7mnk`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(H, {
                                          __fromCanvasComponent: !0,
                                          children: d(c, {
                                            children: d(`p`, {
                                              style: {
                                                "--font-selector": `R0Y7T3h5Z2VuLXJlZ3VsYXI=`,
                                                "--framer-font-family": `"Oxygen", "Oxygen Placeholder", sans-serif`,
                                                "--framer-line-height": `1.4em`,
                                                "--framer-text-color": `var(--token-65994c4a-ff01-4ac8-b58c-8a780b58c0db, rgb(0, 0, 0))`,
                                              },
                                              children: `@aaztoolsco`,
                                            }),
                                          }),
                                          className: `framer-q33ozs`,
                                          fonts: [`GF;Oxygen-regular`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    B() &&
                      d(R, {
                        height: 600,
                        width: `1200px`,
                        y: (f?.y || 0) + 0 + 714.4,
                        children: d(N, {
                          className: `framer-o20asv-container hidden-gd3up6 hidden-1oqmhp4`,
                          layout: P,
                          nodeId: `Wx_JRyyAa`,
                          scopeId: `AIJK2IvNV`,
                          children: d(Z, {
                            height: `100%`,
                            id: `Wx_JRyyAa`,
                            layoutId: `Wx_JRyyAa`,
                            style: { width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-c40tA.framer-xu5vm2, .framer-c40tA .framer-xu5vm2 { display: block; }`,
        `.framer-c40tA.framer-9hptyy { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-c40tA .framer-69p708 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 50px 50px 50px; position: relative; width: 100%; }`,
        `.framer-c40tA .framer-7qixgj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-c40tA .framer-1s2jbmz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-c40tA .framer-whg2tr, .framer-c40tA .framer-1jraxhn, .framer-c40tA .framer-1pq6dcl, .framer-c40tA .framer-1bryrss { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-c40tA .framer-h3hhj4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 30px 50px; position: relative; width: 100%; }`,
        `.framer-c40tA .framer-1rx93d4-container { flex: none; height: 400px; position: relative; width: 1131px; }`,
        `.framer-c40tA .framer-1rk1eo5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 342px; }`,
        `.framer-c40tA .framer-1u5rhsi-container { aspect-ratio: 1.3125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 152px); position: relative; width: 100%; }`,
        `.framer-c40tA .framer-1p2hebc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-c40tA .framer-18c7euu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-c40tA .framer-1clqurr, .framer-c40tA .framer-5vfgxo, .framer-c40tA .framer-1rxkzpr, .framer-c40tA .framer-1hiilhh, .framer-c40tA .framer-1ym65ar, .framer-c40tA .framer-19ycxql { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-c40tA .framer-1142l0a-container, .framer-c40tA .framer-whzm5y-container, .framer-c40tA .framer-1a5itbg-container, .framer-c40tA .framer-j4pbiw-container, .framer-c40tA .framer-n1jgjv-container, .framer-c40tA .framer-195ipfl-container, .framer-c40tA .framer-1p5brpl-container, .framer-c40tA .framer-1aqkuoy-container, .framer-c40tA .framer-wf9m0p-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-c40tA .framer-aabmzq, .framer-c40tA .framer-11lnmh4, .framer-c40tA .framer-1kkuon2, .framer-c40tA .framer-71tqcz, .framer-c40tA .framer-1fwbu7v, .framer-c40tA .framer-q33ozs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-c40tA .framer-idtqlw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 351px; }`,
        `.framer-c40tA .framer-wda46z-container, .framer-c40tA .framer-15oppzz-container, .framer-c40tA .framer-1qunwkv-container { flex: none; height: 24px; position: relative; width: 32px; }`,
        `.framer-c40tA .framer-c55z5, .framer-c40tA .framer-12zkbcc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 99px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-c40tA .framer-1j2ynhp, .framer-c40tA .framer-vblp68, .framer-c40tA .framer-1kdy0hz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-c40tA .framer-11ti2dk, .framer-c40tA .framer-1pleekj, .framer-c40tA .framer-17iaf6v, .framer-c40tA .framer-arsbge, .framer-c40tA .framer-hlukh0, .framer-c40tA .framer-13j9s6m, .framer-c40tA .framer-843xx1, .framer-c40tA .framer-1gwjuwb, .framer-c40tA .framer-1xey5t0, .framer-c40tA .framer-7xl73h, .framer-c40tA .framer-mbhxch, .framer-c40tA .framer-1elzyeo, .framer-c40tA .framer-gs62ks, .framer-c40tA .framer-jgxgoo, .framer-c40tA .framer-lkuny4 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-c40tA .framer-1qfaefk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 296px; }`,
        `.framer-c40tA .framer-1xc57cj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 105px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-c40tA .framer-r4o2vs, .framer-c40tA .framer-r5k3c3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-c40tA .framer-a1gm8q, .framer-c40tA .framer-h7g2c3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-c40tA .framer-1gctmps { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 319px; }`,
        `.framer-c40tA .framer-11s8kl2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 746px; }`,
        `.framer-c40tA .framer-7v5v0e-container { aspect-ratio: 1.3125 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 152px); position: relative; width: 1px; }`,
        `.framer-c40tA .framer-188sy2p { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-c40tA .framer-x44269 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; }`,
        `.framer-c40tA .framer-o20asv-container { flex: none; height: auto; position: relative; width: 1200px; }`,
        ...ge,
        ...fe,
        ...ie,
        ...ce,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-c40tA.framer-9hptyy { width: 810px; } .framer-c40tA .framer-69p708 { padding: 80px 30px 50px 30px; } .framer-c40tA .framer-1rx93d4-container { width: 751px; } .framer-c40tA .framer-7v5v0e-container { height: var(--framer-aspect-ratio-supported, 266px); }}`,
        `@media (max-width: 809.98px) { .framer-c40tA.framer-9hptyy { width: 390px; } .framer-c40tA .framer-69p708 { padding: 60px 20px 50px 20px; } .framer-c40tA .framer-7qixgj { gap: 30px; padding: 30px 0px 0px 0px; } .framer-c40tA .framer-1rx93d4-container { width: 352px; } .framer-c40tA .framer-1u5rhsi-container { height: var(--framer-aspect-ratio-supported, 277px); }}`,
      ],
      `framer-c40tA`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 1655, width: 1200 }),
    V(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Oxygen`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Oxygen`,
              url: `https://fonts.gstatic.com/s/oxygen/v16/2sDfZG1Wl4Lcnbu6jEcnZ0SkAg.woff2`,
              weight: `400`,
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
        ...Nt,
        ...Pt,
        ...Ft,
        ...It,
        ...C(_e),
        ...C(pe),
        ...C(ae),
        ...C(le),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([b(Z, {}, t)])) }),
    (Gt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerAIJK2IvNV`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `1655`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"XfHmxuNa6":{"layout":["fixed","auto"]},"KctfEkezH":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Gt as __FramerMetadata__, $ as default, Rt as queryParamNames };
//# sourceMappingURL=-L3DAJrYfubdK3vz1-1HHWNdm05Pvf_T3Nk06BKB_5Y.eB57m92V.mjs.map
