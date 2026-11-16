/* AAZ Tools Co - ISO certificate viewer.
   Clicking the "ISO Certified" pill (header) or an ISO badge (footer) opens a pop-up that
   SHOWS the certificates. Nothing downloads until the visitor clicks "Download PDF".
   Edit the CERTS list below when certificates are renewed. */
(function () {
  "use strict";

  var CERTS = [
    {
      id: "9001",
      tab: "ISO 9001:2015",
      title: "ISO 9001:2015 \u2013 Quality Management System",
      img: "/assets/certificates/iso-9001-2015.jpg",
      pdf: "/assets/certificates/AAZ-Tools-Co-ISO-9001-2015-Certificate.pdf",
      file: "AAZ-Tools-Co-ISO-9001-2015-Certificate.pdf",
      meta: "Certificate No. UQ-2026102418 \u00B7 Certified 24 October 2026 \u00B7 Valid until 23 October 2029"
    },
    {
      id: "45001",
      tab: "ISO 45001:2018",
      title: "ISO 45001:2018 \u2013 Occupational Health & Safety Management System",
      img: "/assets/certificates/iso-45001-2018.jpg",
      pdf: "/assets/certificates/AAZ-Tools-Co-ISO-45001-2018-Certificate.pdf",
      file: "AAZ-Tools-Co-ISO-45001-2018-Certificate.pdf",
      meta: "Certificate No. UQ-2026102417 \u00B7 Certified 24 October 2026 \u00B7 Valid until 23 October 2029"
    }
  ];
  var SCOPE = "Scope: supply and trade of machinery and machine tools. Certified by UK Certification & Inspection Limited.";
  var VERIFY_URL = "https://www.ukcertifications.org.uk/verify";

  var root, tabs = [], imgEl, titleEl, metaEl, openEl, dlEl, closeBtn, lastFocus, current = 0;

  function el(tag, cls, attrs) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    for (var k in attrs || {}) n.setAttribute(k, attrs[k]);
    return n;
  }

  function build() {
    root = el("div", "aaz-cert", { role: "dialog", "aria-modal": "true", "aria-labelledby": "aaz-cert-title", hidden: "" });

    var backdrop = el("div", "aaz-cert__backdrop");
    backdrop.addEventListener("click", close);

    var panel = el("div", "aaz-cert__panel");

    var head = el("div", "aaz-cert__head");
    var h = el("h2", "aaz-cert__heading", { id: "aaz-cert-title" });
    h.textContent = "Our ISO Certifications";
    closeBtn = el("button", "aaz-cert__close", { type: "button", "aria-label": "Close certificates" });
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", close);
    head.appendChild(h); head.appendChild(closeBtn);

    var tabBar = el("div", "aaz-cert__tabs", { role: "tablist" });
    CERTS.forEach(function (c, i) {
      var b = el("button", "aaz-cert__tab", { type: "button", role: "tab" });
      b.textContent = c.tab;
      b.addEventListener("click", function () { show(i); });
      tabs.push(b); tabBar.appendChild(b);
    });

    var body = el("div", "aaz-cert__body");
    imgEl = el("img", "aaz-cert__img", { alt: "" });
    body.appendChild(imgEl);

    var foot = el("div", "aaz-cert__foot");
    titleEl = el("p", "aaz-cert__title");
    metaEl = el("p", "aaz-cert__meta");
    var scope = el("p", "aaz-cert__meta"); scope.textContent = SCOPE;
    var actions = el("div", "aaz-cert__actions");
    openEl = el("a", "aaz-cert__btn", { target: "_blank", rel: "noopener" });
    openEl.textContent = "Open full PDF";
    dlEl = el("a", "aaz-cert__btn aaz-cert__btn--primary");
    dlEl.textContent = "Download PDF";
    var verify = el("a", "aaz-cert__link", { href: VERIFY_URL, target: "_blank", rel: "noopener" });
    verify.textContent = "Verify on UKcert";
    actions.appendChild(openEl); actions.appendChild(dlEl); actions.appendChild(verify);
    foot.appendChild(titleEl); foot.appendChild(metaEl); foot.appendChild(scope); foot.appendChild(actions);

    panel.appendChild(head); panel.appendChild(tabBar); panel.appendChild(body); panel.appendChild(foot);
    root.appendChild(backdrop); root.appendChild(panel);
    document.body.appendChild(root);
  }

  function show(i) {
    current = i;
    var c = CERTS[i];
    tabs.forEach(function (t, k) {
      t.setAttribute("aria-selected", k === i ? "true" : "false");
      t.classList.toggle("is-active", k === i);
    });
    imgEl.src = c.img;
    imgEl.alt = "Certificate of Registration: " + c.title + " for AAZ Tools Co.";
    titleEl.textContent = c.title;
    metaEl.textContent = c.meta;
    openEl.href = c.pdf;                                  // opens in a new tab (viewing only)
    dlEl.href = c.pdf; dlEl.setAttribute("download", c.file);   // downloads ONLY when clicked
    imgEl.parentNode.scrollTop = 0;
  }

  function open(index) {
    if (!root) build();
    lastFocus = document.activeElement;
    show(index || 0);
    root.hidden = false;
    document.documentElement.classList.add("aaz-cert-lock");
    document.addEventListener("keydown", onKey);
    closeBtn.focus();
  }

  function close() {
    if (!root || root.hidden) return;
    root.hidden = true;
    document.documentElement.classList.remove("aaz-cert-lock");
    document.removeEventListener("keydown", onKey);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function onKey(e) {
    if (e.key === "Escape") { close(); return; }
    if (e.key !== "Tab") return;
    var f = root.querySelectorAll("button, a[href]");
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  // Header pill and footer badges (event delegation: survives Framer re-renders)
  document.addEventListener("click", function (e) {
    var pill = e.target.closest && e.target.closest(".aaz-iso-pill");
    if (pill) { e.preventDefault(); open(0); return; }
    var badge = e.target.closest && e.target.closest(".aaz-iso-badge");
    if (badge) {
      var img = badge.querySelector("img");
      open(img && /45001/.test(img.getAttribute("src") || "") ? 1 : 0);
    }
  });

  // Keyboard access for footer badges (they are plain images)
  function enhanceBadges() {
    var list = document.querySelectorAll(".aaz-iso-badge");
    for (var i = 0; i < list.length; i++) {
      var li = list[i];
      if (li.getAttribute("role")) continue;
      li.setAttribute("role", "button"); li.setAttribute("tabindex", "0");
      li.setAttribute("aria-haspopup", "dialog");
      li.setAttribute("aria-label", "View ISO certificate");
      li.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); this.click(); }
      });
    }
  }
  if (document.readyState === "complete") enhanceBadges();
  else window.addEventListener("load", enhanceBadges);
})();