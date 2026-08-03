/* ============================================================================
   MODAL — open / close / render project detail
   ----------------------------------------------------------------------------
   Renders from the PROJECTS data (js/projects.js).

   VIDEO  — lead with the video(s). A project may have one video (legacy
   videoId / videoType / poster) or several (video: [{id,type,poster}, …]).
   Each is a "lite-YouTube" facade: a fast poster that swaps in the real inline
   player on click (removed again on close so playback stops). 'regular' = 16:9,
   'shorts' = 9:16 vertical. Inline play needs "Allow embedding" + Public/
   Unlisted visibility on the video in YouTube Studio.

   GALLERY — a scroll-snap carousel by default (uniform-height filmstrip; every
   image shown in full, verticals stay vertical; peek of the next image + swipe
   + arrows + dots + counter make it clear there's more). Set gallery: 'grid'
   on a project for the 2-column masonry instead.
   ========================================================================== */

(function () {
  const byId = {};
  if (typeof PROJECTS !== 'undefined') PROJECTS.forEach(p => { byId[p.id] = p; });

  const $ = id => document.getElementById(id);
  const overlay = () => $('modal-overlay');
  const esc = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  // Normalize a project's video(s) into a list of {id, type, poster}.
  function videosOf(p) {
    if (Array.isArray(p.video)) return p.video;
    if (p.videoId) return [{ id: p.videoId, type: p.videoType, poster: p.poster }];
    return [];
  }

  window.openModal = function (id) {
    const p = byId[id];
    if (!p) return;

    $('modal-title').textContent = p.title;
    $('modal-location').textContent = p.location;
    $('modal-desc').textContent = p.description;

    const imp = $('modal-impact');
    imp.textContent = p.impact || '';
    imp.style.display = p.impact ? 'flex' : 'none';

    $('modal-tags').innerHTML  = p.tags.map(t => `<span class="modal-tag">${esc(t)}</span>`).join('');
    $('modal-roles').innerHTML = p.roles.map(r => `<div class="modal-sidebar-tag">${esc(r)}</div>`).join('');

    // ---- Video(s) — lead with these -------------------------------------
    const vw = $('modal-video-wrap');
    const vids = videosOf(p);
    vw.innerHTML = vids.map(v => {
      const type   = v.type === 'shorts' ? 'shorts' : 'regular';
      const poster = v.poster || `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
      return `<div class="modal-video-wrap ${type}" role="button" tabindex="0" ` +
        `data-vid="${esc(v.id)}" aria-label="Play ${esc(p.title)} video">` +
        `<img class="video-poster" src="${esc(poster)}" alt="${esc(p.title)} — video" loading="lazy" decoding="async">` +
        `<span class="video-play" aria-hidden="true"></span></div>`;
    }).join('');

    // ---- Image gallery ---------------------------------------------------
    const iw = $('modal-images-wrap');
    const imgTag = img =>
      `<img src="${esc(img.src)}" alt="${esc(p.title)}"` +
      (img.w ? ` width="${img.w}"` : '') + (img.h ? ` height="${img.h}"` : '') +
      ` loading="lazy" decoding="async">`;

    if (p.images && p.images.length && p.gallery !== 'grid') {
      iw.innerHTML =
        `<div class="carousel">` +
          `<div class="carousel-track">` +
            p.images.map(img => `<div class="carousel-slide">${imgTag(img)}</div>`).join('') +
          `</div>` +
          `<button class="carousel-arrow prev" type="button" aria-label="Previous image">‹</button>` +
          `<button class="carousel-arrow next" type="button" aria-label="Next image">›</button>` +
          `<div class="carousel-count"><span class="cur">1</span> / ${p.images.length}</div>` +
          `<div class="carousel-dots">` +
            p.images.map((_, i) => `<button class="carousel-dot${i === 0 ? ' active' : ''}" type="button" data-i="${i}" aria-label="Go to image ${i + 1}"></button>`).join('') +
          `</div>` +
        `</div>`;
      // Keep dots + counter in sync as the user scrolls / swipes.
      const carousel = iw.querySelector('.carousel');
      const track = carousel.querySelector('.carousel-track');
      let raf = 0;
      track.addEventListener('scroll', () => {
        if (raf) return;
        raf = requestAnimationFrame(() => { raf = 0; syncCarousel(carousel); });
      });
    } else if (p.images && p.images.length) {
      iw.innerHTML = `<div class="modal-images">` +
        p.images.map(img => `<div class="modal-img">${imgTag(img)}</div>`).join('') + '</div>';
    } else {
      iw.innerHTML = '';
    }

    overlay().classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // ---- Video facade → real player ----------------------------------------
  function playVideo(wrap) {
    const id = wrap.dataset.vid;
    if (!id || wrap.classList.contains('playing')) return;
    const src = `https://www.youtube.com/embed/${encodeURIComponent(id)}` +
      `?rel=0&autoplay=1&modestbranding=1&playsinline=1&origin=${encodeURIComponent(location.origin)}`;
    wrap.classList.add('playing');
    wrap.insertAdjacentHTML('beforeend',
      `<iframe src="${src}" title="Project video" ` +
      `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ` +
      `referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
  }

  // ---- Carousel helpers ---------------------------------------------------
  function curIdx(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.clientWidth / 2 - center);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }

  function goCarousel(carousel, idx) {
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    idx = Math.max(0, Math.min(slides.length - 1, idx));
    const s = slides[idx];
    track.scrollTo({ left: s.offsetLeft - (track.clientWidth - s.clientWidth) / 2, behavior: 'smooth' });
  }

  function syncCarousel(carousel) {
    const idx = curIdx(carousel);
    carousel.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    const cur = carousel.querySelector('.carousel-count .cur');
    if (cur) cur.textContent = idx + 1;
  }

  // #modal-images-wrap persists, so wire click delegation once.
  const imagesContainer = $('modal-images-wrap');
  if (imagesContainer) {
    imagesContainer.addEventListener('click', e => {
      const carousel = e.target.closest('.carousel');
      if (!carousel) return;
      const idx = curIdx(carousel);
      if (e.target.closest('.carousel-arrow.next')) goCarousel(carousel, idx + 1);
      else if (e.target.closest('.carousel-arrow.prev')) goCarousel(carousel, idx - 1);
      else {
        const dot = e.target.closest('.carousel-dot');
        if (dot) goCarousel(carousel, parseInt(dot.dataset.i, 10));
      }
    });
  }

  // Arrow keys navigate the carousel while the modal is open.
  document.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (!overlay().classList.contains('open')) return;
    const carousel = $('modal-images-wrap').querySelector('.carousel');
    if (!carousel) return;
    goCarousel(carousel, curIdx(carousel) + (e.key === 'ArrowRight' ? 1 : -1));
  });

  // #modal-video-wrap persists, so wire video-facade delegation once.
  const videoContainer = $('modal-video-wrap');
  if (videoContainer) {
    videoContainer.addEventListener('click', e => {
      const wrap = e.target.closest('.modal-video-wrap');
      if (wrap) playVideo(wrap);
    });
    videoContainer.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const wrap = e.target.closest('.modal-video-wrap');
      if (wrap) { e.preventDefault(); playVideo(wrap); }
    });
  }

  window.closeModal = function () {
    overlay().classList.remove('open');
    document.body.style.overflow = '';
    // Remove the video block on close so any playing iframe stops.
    $('modal-video-wrap').innerHTML = '';
  };

  window.closeModalOutside = function (e) {
    if (e.target === overlay()) closeModal();
  };

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
})();
