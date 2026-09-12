/* ============================================================================
   Elements — interactions
   world toggle · category filter · deep-link share · video lightbox · reveals
   ========================================================================== */
(function () {
  "use strict";
  var DATA = window.ELEMENTS_DATA || { production: [], interior: [] };
  var doc = document;
  var htmlEl = doc.documentElement;

  /* ------------------------------------------------------ world copy */
  var WORLD_TEXT = {
    production: {
      "work-script": "Production Design",
      "work-title": "PORTFOLIO",
      "work-intro": "Sets and worlds for Amazon, Netflix, Flipkart, Hershey’s and more — from award-winning branded films to a decade of commercials and art-department craft.",
      "intro": "I build worlds for film & television — making the characters of a story belong to their space — and shape homes with the same eye for narrative, texture and intention."
    },
    interior: {
      "work-script": "Interior Design",
      "work-title": "PORTFOLIO",
      "work-intro": "Characterful homes across Mumbai — 1, 3 and 4 BHK residences and styling projects, many with the studio Attirail. Layered, collected, and made to be lived in.",
      "intro": "I shape homes with a film designer’s eye — layering colour, pattern, art and collected objects into rooms with real narrative — and build worlds for film & television."
    }
  };

  /* ------------------------------------------------------ icons */
  var IC = {
    behance: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.2 8.6c1 0 1.8.2 2.4.66.6.46.9 1.16.9 2.1 0 .96-.44 1.64-1.3 2.05.6.17 1.06.5 1.37.95.3.46.46 1 .46 1.65 0 .5-.1.94-.28 1.3-.19.38-.45.68-.78.92-.34.24-.72.42-1.16.53-.43.11-.88.17-1.34.17H2.5V8.6h5.7zM8 12.9c.42 0 .77-.1 1.03-.3.27-.2.4-.53.4-.98 0-.25-.04-.46-.13-.62a1 1 0 0 0-.37-.37 1.5 1.5 0 0 0-.52-.18 3.4 3.4 0 0 0-.61-.05H5v2.47h3zm.16 4.15c.24 0 .46-.02.66-.07.2-.05.38-.12.53-.23.15-.11.27-.26.36-.44.09-.19.13-.42.13-.7 0-.55-.16-.94-.47-1.18-.3-.23-.72-.35-1.24-.35H5v3h3.16zM15.7 17c.28.27.68.4 1.2.4.38 0 .7-.09.98-.28.27-.18.44-.38.5-.58h1.8c-.29.9-.73 1.53-1.32 1.9-.6.38-1.31.57-2.15.57-.58 0-1.1-.1-1.58-.28a3.3 3.3 0 0 1-1.2-.8 3.6 3.6 0 0 1-.75-1.24 4.6 4.6 0 0 1-.27-1.6c0-.56.1-1.08.28-1.56.18-.48.44-.9.78-1.24.34-.35.74-.62 1.2-.82.46-.19.97-.28 1.53-.28.62 0 1.16.12 1.63.36.47.24.85.56 1.14.96.3.4.5.86.63 1.37.13.5.18 1.04.14 1.6h-5.18c0 .58.2 1.05.46 1.34zm2.08-3.58c-.22-.24-.57-.36-1.03-.36-.3 0-.55.05-.75.15-.2.1-.35.23-.46.38-.12.15-.2.3-.24.48-.05.16-.08.31-.09.45h3.19c-.05-.5-.22-.86-.44-1.1zM14.6 9.75h3.98v.97H14.6z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.43-5a2.8 2.8 0 0 0-2-2C18.8 4.5 12 4.5 12 4.5s-6.8 0-8.6.5a2.8 2.8 0 0 0-2 2C1 8.6 1 12 1 12s0 3.4.43 5a2.8 2.8 0 0 0 2 2c1.8.5 8.6.5 8.6.5s6.8 0 8.6-.5a2.8 2.8 0 0 0 2-2c.43-1.6.43-5 .43-5zM9.8 15.3V8.7l5.7 3.3z"/></svg>',
    vimeo: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7.4c-.1 2.1-1.6 5-4.4 8.6-2.9 3.8-5.4 5.7-7.4 5.7-1.25 0-2.3-1.15-3.15-3.45L5.4 12.6c-.6-2.3-1.25-3.45-1.95-3.45-.15 0-.68.32-1.6.95L.9 8.87c1-.88 1.98-1.76 2.95-2.64C5.17 5.08 6.17 4.5 6.82 4.44c1.55-.15 2.5.9 2.85 3.16.38 2.44.64 3.96.79 4.55.44 2 .92 3 1.45 3 .41 0 1.03-.65 1.86-1.96.83-1.3 1.27-2.3 1.33-2.98.12-1.13-.32-1.7-1.33-1.7-.47 0-.96.1-1.46.32.97-3.17 2.82-4.71 5.55-4.62 2.03.06 2.98 1.38 2.86 3.96z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  var LINK_LABEL = { behance: "Behance", youtube: "Watch", vimeo: "Watch", instagram: "Reel", external: "Visit" };

  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }

  /* thumbnail failure -> try fallback url once, then reveal the styled placeholder */
  window.ELEMENTS_coverFail = function (img) {
    var fb = img.getAttribute("data-fb");
    if (fb) { img.removeAttribute("data-fb"); img.src = fb; return; }
    var cover = img.closest(".card-cover") || img.parentNode;
    if (cover && cover.classList) cover.classList.add("no-img"); else img.style.display = "none";
  };
  function ytThumb(id){ return "https://i.ytimg.com/vi/" + id + "/maxresdefault.jpg"; }
  function ytThumbFallback(id){ return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }

  /* ------------------------------------------------------ card builder */
  function cardHTML(p, idx, compact) {
    var media = p.media;
    var hasYT = media && media.type === "youtube";
    var hasVimeo = media && media.type === "vimeo";
    var playable = hasYT || hasVimeo;
    var thumb = p.image || (hasYT ? ytThumb(media.id) : null);

    var playAttr = playable ? ' data-play="' + media.type + ":" + media.id + '"' : "";
    // primary (non-video) destination for the cover, if any
    var primary = null;
    if (!playable) {
      var order = ["behance", "external", "instagram", "youtube", "vimeo"];
      for (var k = 0; k < order.length; k++) { if (p.links && p.links[order[k]]) { primary = p.links[order[k]]; break; } }
    }

    /* cover — the styled placeholder is always the base layer, so a thumbnail
       that fails to load falls back to it gracefully (no broken-image icon). */
    var ph = "ph-" + (((idx) % 5) + 1);
    var coverInner = '<span class="ph ' + ph + '"><span class="ph-ring"></span><span class="ph-word">' + esc(p.title) + '</span></span>';
    if (thumb) {
      var fbAttr = hasYT ? ' data-fb="' + ytThumbFallback(media.id) + '"' : "";
      coverInner += '<img class="cover-img" src="' + thumb + '" alt="' + esc(p.title) + ' — ' + esc(p.brand) + '" loading="lazy"' + fbAttr + ' onerror="ELEMENTS_coverFail(this)">';
      coverInner += '<span class="scrim"></span>';
      coverInner += '<span class="cover-caption"><b>' + esc(p.title) + '</b><span>' + esc(p.brand) + '</span></span>';
    }
    /* top badges */
    var topBadges = "";
    if (p.award) topBadges += '<span class="tag badge-award">★ Award</span>';
    else if (p.category) topBadges += '<span class="tag">' + esc(p.category) + '</span>';
    if (p.status === "verified") topBadges += '<span class="tag solid">Verified</span>';
    coverInner = '<span class="cover-top">' + topBadges + '</span>' + coverInner;
    if (playable) coverInner += '<span class="play">' + IC.play + "</span>";
    else if (primary) coverInner += '<span class="play" style="width:46px;height:46px">' + IC.arrow + "</span>";

    var coverTag, coverAttr, coverClose;
    if (playable) { coverTag = "button"; coverAttr = ' class="card-cover"' + playAttr + ' aria-label="Play ' + esc(p.title) + '"'; coverClose = "button"; }
    else if (primary) { coverTag = "a"; coverAttr = ' class="card-cover" href="' + esc(primary) + '" target="_blank" rel="noopener" aria-label="' + esc(p.title) + '"'; coverClose = "a"; }
    else { coverTag = "div"; coverAttr = ' class="card-cover"'; coverClose = "div"; }
    var cover = "<" + coverTag + coverAttr + ">" + coverInner + "</" + coverClose + ">";

    /* body */
    var body = '<div class="card-body">';
    body += '<span class="cat">' + esc(p.category || p.role || "") + "</span>";
    body += "<h3>" + esc(p.title) + "</h3>";
    if (p.brand) body += '<span class="brand">' + esc(p.brand) + "</span>";
    if (!compact && p.blurb) body += "<p>" + esc(p.blurb) + "</p>";
    if (!compact && p.rooms && p.rooms.length) {
      body += '<div class="rooms">';
      p.rooms.forEach(function (r){ body += '<span class="room">' + esc(r) + "</span>"; });
      body += "</div>";
    }
    /* link pills */
    if (p.links) {
      var pills = "";
      ["behance", "youtube", "vimeo", "instagram", "external"].forEach(function (key){
        if (p.links[key]) pills += '<a class="pill-link" href="' + esc(p.links[key]) + '" target="_blank" rel="noopener">' + (IC[key] || "") + LINK_LABEL[key] + "</a>";
      });
      if (pills) body += '<div class="card-links">' + pills + "</div>";
    }
    body += "</div>";

    return '<article class="card reveal">' + cover + body + "</article>";
  }

  /* ------------------------------------------------------ rendering */
  var featuredEl = doc.getElementById("grid-featured");
  var archiveEl = doc.getElementById("grid-archive");
  var chipsEl = doc.getElementById("chips");
  var currentWorld = "production";
  var currentCat = "All";

  function itemsFor(world) {
    var list = DATA[world] || [];
    var featured = list.filter(function (p){ return !p.archive; });
    var archive = list.filter(function (p){ return p.archive; });
    // production: put the notable award project's duplicate out (it lives in the notable band) -> keep in grid too is fine
    return { featured: featured, archive: archive };
  }

  function renderChips(featured) {
    var cats = ["All"];
    featured.forEach(function (p){ if (p.category && cats.indexOf(p.category) < 0) cats.push(p.category); });
    chipsEl.innerHTML = cats.map(function (c){
      return '<button class="chip" data-cat="' + esc(c) + '" aria-pressed="' + (c === currentCat) + '">' + esc(c) + "</button>";
    }).join("");
  }

  function renderWorld(world) {
    var sets = itemsFor(world);
    var vis = sets.featured.filter(function (p){ return currentCat === "All" || p.category === currentCat; });
    featuredEl.innerHTML = vis.map(function (p, i){ return cardHTML(p, i, false); }).join("");
    if (archiveEl) archiveEl.innerHTML = sets.archive.map(function (p, i){ return cardHTML(p, i, true); }).join("");
    observeReveals(featuredEl);
    // toggle world-only sections
    Array.prototype.forEach.call(doc.querySelectorAll("[data-show-world]"), function (el){
      el.hidden = (el.getAttribute("data-show-world") !== world);
    });
  }

  function applyWorldText(world) {
    var map = WORLD_TEXT[world] || {};
    Array.prototype.forEach.call(doc.querySelectorAll("[data-world-text]"), function (el){
      var key = el.getAttribute("data-world-text");
      if (map[key] != null) el.textContent = map[key];
    });
  }

  /* ------------------------------------------------------ toggle */
  function positionThumbs() {
    Array.prototype.forEach.call(doc.querySelectorAll(".toggle"), function (t){
      var thumb = t.querySelector(".thumb");
      var active = t.querySelector('[data-world-btn][aria-pressed="true"]');
      if (thumb && active) { thumb.style.left = active.offsetLeft + "px"; thumb.style.width = active.offsetWidth + "px"; }
    });
  }

  function setWorld(world, opts) {
    opts = opts || {};
    if (world !== "production" && world !== "interior") world = "production";
    currentWorld = world;
    currentCat = "All";
    htmlEl.setAttribute("data-world", world);
    Array.prototype.forEach.call(doc.querySelectorAll("[data-world-btn]"), function (b){
      b.setAttribute("aria-pressed", b.getAttribute("data-world-btn") === world);
    });
    positionThumbs();
    applyWorldText(world);
    renderWorld(world);
    renderChips(itemsFor(world).featured);
    if (!opts.silent) {
      var url = new URL(location.href);
      url.searchParams.set("work", world);
      history.replaceState(null, "", url);
    }
    if (opts.scroll) {
      var w = doc.getElementById("work");
      if (w) w.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* ------------------------------------------------------ lightbox */
  var lb = doc.getElementById("lb"), lbBody = doc.getElementById("lbBody");
  function openLB(type, id) {
    var src = type === "vimeo"
      ? "https://player.vimeo.com/video/" + id + "?autoplay=1&title=0&byline=0"
      : "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    lbBody.innerHTML = '<iframe src="' + src + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    lb.classList.add("open");
  }
  function closeLB() { lb.classList.remove("open"); lbBody.innerHTML = ""; }

  /* ------------------------------------------------------ share */
  function shareURL(world) {
    var u = new URL(location.origin + location.pathname);
    if (world === "production" || world === "interior") u.searchParams.set("work", world);
    return u.toString() + "#work";
  }
  function copyText(text, cb) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(cb, function () { fallbackCopy(text); cb(); });
    } else { fallbackCopy(text); cb(); }
  }
  function fallbackCopy(text) {
    var ta = doc.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    doc.body.appendChild(ta); ta.select();
    try { doc.execCommand("copy"); } catch (e) {}
    doc.body.removeChild(ta);
  }

  /* ------------------------------------------------------ reveals */
  var io = null;
  function observeReveals(scope) {
    var els = (scope || doc).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { Array.prototype.forEach.call(els, function (el){ el.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (entries){
      entries.forEach(function (e){ if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    Array.prototype.forEach.call(els, function (el){ io.observe(el); });
  }

  /* ------------------------------------------------------ events */
  doc.addEventListener("click", function (e) {
    var wb = e.target.closest("[data-world-btn]");
    if (wb) { setWorld(wb.getAttribute("data-world-btn"), {}); return; }

    var chip = e.target.closest(".chip");
    if (chip) {
      currentCat = chip.getAttribute("data-cat");
      Array.prototype.forEach.call(chipsEl.querySelectorAll(".chip"), function (c){ c.setAttribute("aria-pressed", c === chip); });
      renderWorld(currentWorld);
      return;
    }

    var play = e.target.closest("[data-play]");
    if (play) {
      e.preventDefault();
      var v = play.getAttribute("data-play"); var i = v.indexOf(":");
      openLB(v.slice(0, i), v.slice(i + 1));
      return;
    }

    var sh = e.target.closest("[data-share]");
    if (sh) {
      var w = sh.getAttribute("data-share");
      copyText(shareURL(w), function () {
        sh.classList.add("done");
        setTimeout(function () { sh.classList.remove("done"); }, 1900);
      });
      return;
    }

    if (e.target.closest("#archiveBtn")) {
      var btn = doc.getElementById("archiveBtn"), wrap = doc.getElementById("archive");
      var open = wrap.hidden;
      wrap.hidden = !open;
      btn.setAttribute("aria-expanded", open);
      btn.firstChild && (btn.childNodes[0].nodeValue = open ? "Hide the commercial archive " : "Show the full commercial archive ");
      if (open) observeReveals(wrap);
      return;
    }

    if (e.target.closest("#lbClose") || e.target === lb) closeLB();
  });

  doc.addEventListener("keydown", function (e){ if (e.key === "Escape" && lb.classList.contains("open")) closeLB(); });
  window.addEventListener("resize", positionThumbs);

  var nav = doc.getElementById("nav");
  window.addEventListener("scroll", function () { nav.classList.toggle("scrolled", window.scrollY > 12); }, { passive: true });

  /* ------------------------------------------------------ init */
  function init() {
    var yearEl = doc.getElementById("year"); if (yearEl) yearEl.textContent = new Date().getFullYear();
    var params = new URLSearchParams(location.search);
    var w = (params.get("work") || "").toLowerCase();
    var start = (w === "interior") ? "interior" : "production";
    setWorld(start, { silent: true });
    observeReveals(doc);
    // fonts can shift button widths — re-measure once ready
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(positionThumbs);
    setTimeout(positionThumbs, 350);
  }
  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init); else init();
})();
