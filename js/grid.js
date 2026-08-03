/* ============================================================================
   GRID — renders the project tiles from PROJECTS (js/projects.js)

   Style: "client-name tiles" (inspired by editorial studio grids). Default is a
   calm tile showing the CLIENT name + an index + category; on hover it reveals
   the cover photo with client, project title, and location. Data-driven, so
   adding a project stays a one-object edit. Click / Enter opens the modal.
   ========================================================================== */

(function () {
  const grid = document.getElementById('project-grid');
  if (!grid || typeof PROJECTS === 'undefined') return;

  const esc = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

  grid.innerHTML = PROJECTS.map((p, i) => {
    const idx    = String(i + 1).padStart(2, '0');
    const client = esc(p.client || p.card.name || p.title);
    const work   = esc(p.work || '');
    const loc    = esc(p.card && p.card.location || p.location || '');
    const catLbl = p.category === 'content' ? 'Content' : 'Experiential';
    const eager  = i < 6; // top rows load promptly; rest lazy-load
    const locHtml = loc ? '<span class="tm-loc">' + loc + '</span>' : '';
    return `
    <div class="project-card" data-cat="${esc(p.category)}" data-id="${esc(p.id)}" role="button" tabindex="0" aria-label="Open ${client} — ${work}">
      <div class="tile">
        <div class="tile-reveal">
          <img src="${esc(p.hero)}" alt="${client} — ${work}" width="400" height="300"
               loading="${eager ? 'eager' : 'lazy'}"${eager ? ' fetchpriority="high"' : ''} decoding="async">
          <div class="tile-meta">
            <span class="tm-client">${client}</span>
            <span class="tm-work">${work}</span>
            ${locHtml}
          </div>
        </div>
        <div class="tile-face">
          <span class="tf-idx">${idx} / ${catLbl}</span>
          <span class="tf-name">
            <span class="tf-client">${client}</span>
            <span class="tf-work">${work}</span>
          </span>
        </div>
      </div>
    </div>`;
  }).join('');

  // Open the modal on click or keyboard activation (event delegation).
  grid.addEventListener('click', e => {
    const card = e.target.closest('.project-card');
    if (card) openModal(card.dataset.id);
  });
  grid.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.project-card');
    if (card) { e.preventDefault(); openModal(card.dataset.id); }
  });
})();
