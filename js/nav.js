/* ============================================================================
   NAV — page switching between Work / About / Contact
   Pages are plain <div class="page"> blocks; only one carries .active.
   ========================================================================== */

function showPage(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));

  const page = document.getElementById('page-' + p);
  if (page) page.classList.add('active');

  const link = document.getElementById('nav-' + p);
  if (link) link.classList.add('active');

  window.scrollTo(0, 0);
}
