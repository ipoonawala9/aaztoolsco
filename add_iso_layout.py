#!/usr/bin/env python3
"""
STEP 2 (run AFTER add_iso_badge.py). Run from the repo root (folder with index.html).

 Footer : removes the badge image from the LEFT column, removes the nav links
          (Home / About Us / Products / Contact Us) from the RIGHT column and puts the two
          ISO badges there instead (stacked), next to the address / email / Instagram / phones.
 Header : adds an "ISO Certified" pill beside the "Contact us" button.
 Styling: new file aaz-iso.css, linked from every page.

Edits the static HTML AND scripts/vendor/script_main.uTZe6mfQ.mjs (Framer re-renders
from the bundle after load, so both must match). Safe to run twice.
"""
import glob, os, re, sys

BUNDLE = "scripts/vendor/script_main.uTZe6mfQ.mjs"
need = ["index.html", BUNDLE, "aaz-iso.css",
        "assets/images/iso-9001-2015.png", "assets/images/iso-45001-2018.png"]
missing = [p for p in need if not os.path.exists(p)]
if missing:
    sys.exit("Missing (copy them in first): " + ", ".join(missing))

try:
    from PIL import Image
    W1, H1 = Image.open("assets/images/iso-9001-2015.png").size
    W2, H2 = Image.open("assets/images/iso-45001-2018.png").size
except Exception:
    W1 = H1 = W2 = H2 = 280

def read(p):  return open(p, encoding="utf-8").read()
def write(p, s): open(p, "w", encoding="utf-8", newline="").write(s)

ALT1 = "ISO 9001:2015 certified company"
ALT2 = "ISO 45001:2018 certified company"

# ------------------------------------------------------------------ HTML
LEFT_IMG = re.compile(r'<img src="/assets/images/iso-certified\.png"[^>]*>')
NAV_UL   = re.compile(r'<ul class="framer-1ixsqpa" data-framer-name="list">.*?</ul>', re.S)
ISO_UL = ('<ul class="framer-1ixsqpa" data-framer-name="iso-badges">'
          f'<li class="aaz-iso-badge"><img src="/assets/images/iso-9001-2015.png" alt="{ALT1}" width="{W1}" height="{H1}" loading="lazy" decoding="async"></li>'
          f'<li class="aaz-iso-badge"><img src="/assets/images/iso-45001-2018.png" alt="{ALT2}" width="{W2}" height="{H2}" loading="lazy" decoding="async"></li>'
          '</ul>')
CTA   = '<div class="framer-zu57gu-container">'
PILL  = '<span class="aaz-iso-pill">ISO Certified</span>'
LINK  = '<link rel="stylesheet" href="/aaz-iso.css">'

pages = 0
for f in sorted(glob.glob("./*.html")):
    s = read(f)
    if '<ul class="framer-1ixsqpa" data-framer-name="list">' not in s and "iso-badges" not in s:
        continue                                   # e.g. 404.html has no footer
    o = s
    s = LEFT_IMG.sub("", s)
    s = NAV_UL.sub(ISO_UL, s)
    if PILL not in s:
        s = s.replace(CTA, PILL + CTA)
    if LINK not in s:
        s = s.replace("</head>", LINK + "</head>", 1)
    if s != o:
        write(f, s); pages += 1
print(f"HTML   : {pages} pages updated")

# ------------------------------------------------------------------ JS bundle
s = read(BUNDLE)

def match_close(s, open_paren_idx):
    """index just past the ')' matching s[open_paren_idx] == '(' (skips template/quoted strings)."""
    depth, i, quote = 0, open_paren_idx, None
    while True:
        c = s[i]
        if quote:
            if c == "\\": i += 1
            elif c == quote: quote = None
        elif c in "`'\"": quote = c
        elif c == "(": depth += 1
        elif c == ")":
            depth -= 1
            if depth == 0: return i + 1
        i += 1

# (a) remove the badge from the left column
m = s.find("_(`img`, {\n key: `aaz-iso-badge`")
if m == -1:
    print("JS     : left-column badge already removed")
else:
    end = match_close(s, s.index("(", m))
    start = s.rfind(",", 0, m)                       # the comma before it
    s = s[:start] + s[end:]
    print("JS     : left-column badge removed")

# (b) nav list -> ISO badges
if "iso-badges" in s:
    print("JS     : nav already replaced")
else:
    a = s.index("S(E.ul, {\n                                className: `framer-1ixsqpa`")
    end = match_close(s, s.index("(", a))
    old = s[a:end]
    head = old[: old.index("children: [")].replace("`list`", "`iso-badges`")
    def li(key, src, alt, w, h):
        return (f"_(`li`, {{ key: `{key}`, className: `aaz-iso-badge`, children: _(`img`, "
                f"{{ src: `{src}`, alt: `{alt}`, width: {w}, height: {h}, loading: `lazy`, decoding: `async` }}) }})")
    new = (head + "children: [\n" +
           li("iso-9001", "/assets/images/iso-9001-2015.png", ALT1, W1, H1) + ",\n" +
           li("iso-45001", "/assets/images/iso-45001-2018.png", ALT2, W2, H2) + ",\n]\n})")
    s = s[:a] + new + s[end:]
    print("JS     : nav links replaced by ISO badges")

# (c) header pill, rendered exactly when the Contact us button is
if "aaz-iso-pill" in s:
    print("JS     : header pill already added")
else:
    k = s.index("className: `framer-zu57gu-container`")
    r = s.rindex("re() &&", 0, k)
    s = s[:r] + "re() && _(`span`, { className: `aaz-iso-pill`, children: `ISO Certified` }),\n" + s[r:]
    print("JS     : header pill added")

write(BUNDLE, s)
