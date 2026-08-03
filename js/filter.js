/* ============================================================================
   FILTER — show/hide project cards by category (All / Experiential / Content)
   Categories come from each card's data-cat attribute (set by grid.js).
   ========================================================================== */

function filterCards(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.project-card').forEach(c => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
}
