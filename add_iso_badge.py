#!/usr/bin/env python3
"""
Run from the ROOT of the aaztoolsco repo (the folder that contains index.html).

  1. Footer (all pages): removes "Stockist- Authorised Dealer- Agent of top industrial brands."
     and adds the ISO badge image under the footer text.
  2. About Us: adds "an ISO 9001:2015 and ISO 45001:2018 certified company" to the intro paragraph.

Edits BOTH the static HTML and the two JS bundles, because Framer re-renders
the text from the JS bundle after the page loads (HTML-only edits would revert).
Safe to run twice (it skips anything already patched).
"""
import glob, os, re, sys

IMG_SRC = "/assets/images/iso-certified.png"
IMG_ALT = "ISO 9001:2015 and ISO 45001:2018 certified company"
IMG_W, IMG_H = 960, None  # height filled in below from the file
STYLE_HTML = "display:block;width:100%;max-width:280px;height:auto;margin-top:12px"

FOOTER_BUNDLE = "scripts/vendor/script_main.uTZe6mfQ.mjs"
ABOUT_BUNDLE  = "scripts/vendor/uo2V8bGJLoT_AbFkRycFIaPemnWu7uzrXpDxDUsgK40.tvKv-OjT.mjs"

if not os.path.exists("index.html") or not os.path.exists(FOOTER_BUNDLE):
    sys.exit("Run this from the repo root (the folder with index.html and scripts/).")
if not os.path.exists("assets/images/iso-certified.png"):
    sys.exit("Put iso-certified.png in assets/images/ first.")

try:
    from PIL import Image
    IMG_W, IMG_H = Image.open("assets/images/iso-certified.png").size
except Exception:
    IMG_H = 476  # fallback if Pillow isn't installed (only used for width/height attributes)

def read(p):  return open(p, encoding="utf-8").read()
def write(p, s): open(p, "w", encoding="utf-8", newline="").write(s)

# ---------------------------------------------------------------- 1a. footer: HTML
OLD_HTML = "India. Stockist- Authorised Dealer- Agent of top industrial brands. </p></div></div>"
NEW_HTML = ('India. </p></div>'
            f'<img src="{IMG_SRC}" alt="{IMG_ALT}" width="{IMG_W}" height="{IMG_H}" '
            f'loading="lazy" decoding="async" style="{STYLE_HTML}"></div>')
n_pages = n_repl = 0
for f in sorted(glob.glob("*.html")):
    s = read(f)
    if OLD_HTML not in s:
        continue
    n_repl += s.count(OLD_HTML)
    write(f, s.replace(OLD_HTML, NEW_HTML))
    n_pages += 1
print(f"footer HTML : {n_repl} blocks patched in {n_pages} pages")

# ---------------------------------------------------------------- 1b. footer: JS bundle
s = read(FOOTER_BUNDLE)
if "framer-iso-badge" in s:
    print("footer JS   : already patched")
else:
    s = s.replace("Stockist- Authorised Dealer- Agent of top industrial brands. `", "`", 1)
    anchor = s.index("className: `framer-lyszf8`")
    start = s.index("children: _(J, {", anchor) + len("children: ")
    # walk to the matching close paren of  _(J, {...})  (aware of template strings)
    i, depth, in_str = s.index("(", start), 0, False
    while True:
        c = s[i]
        if in_str:
            if c == "\\": i += 1
            elif c == "`": in_str = False
        else:
            if c == "`": in_str = True
            elif c == "(": depth += 1
            elif c == ")":
                depth -= 1
                if depth == 0: break
        i += 1
    end = i + 1
    text_node = s[start:end].replace("_(J, {", "_(J, {\n key: `aaz-footer-text`,", 1)
    img = ('_(`img`, {\n key: `aaz-iso-badge`,\n className: `framer-iso-badge`,\n'
           f' src: `{IMG_SRC}`,\n alt: `{IMG_ALT}`,\n width: {IMG_W},\n height: {IMG_H},\n'
           ' loading: `lazy`,\n decoding: `async`,\n style: {\n display: `block`,\n width: `100%`,\n'
           ' maxWidth: `280px`,\n height: `auto`,\n marginTop: `12px`,\n },\n })')
    s = s[:start] + "[" + text_node + ",\n" + img + "]" + s[end:]
    write(FOOTER_BUNDLE, s)
    print("footer JS   : patched")

# ---------------------------------------------------------------- 2a. About Us: HTML (word-by-word spans)
about = "about-us.html"
s = read(about)
pat = re.compile(r'(<span style="([^"]*)">)Co</span> (<span style="[^"]*">)delivers</span>')
if ">9001:2015</span>" in s:
    print("about HTML  : already patched")
else:
    def rep(m):
        st = m.group(2)
        w = lambda t: f'<span style="{st}">{t}</span>'
        return (w("Co,") + " " + " ".join(w(t) for t in
                ["an","ISO","9001:2015","and","ISO","45001:2018","certified","company,"]) + " " + w("delivers"))
    s, n = pat.subn(rep, s)
    write(about, s)
    print(f"about HTML  : {n} variants patched (expect 3)")

# ---------------------------------------------------------------- 2b. About Us: JS bundle
s = read(ABOUT_BUNDLE)
OLD = "AAZ Tools Co delivers trusted"
NEW = "AAZ Tools Co, an ISO 9001:2015 and ISO 45001:2018 certified company, delivers trusted"
print(f"about JS    : {s.count(OLD)} strings patched (expect 3)")
write(ABOUT_BUNDLE, s.replace(OLD, NEW))
