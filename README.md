# Steffi Behringer — Resume & Portfolio

Static site, no framework, no build tooling required (one optional Python
script minifies assets). Hosted on GitHub Pages.

Custom domain: **steffibehringer.com** (see CNAME).
- **Portfolio (home):** `index.html`        → https://steffibehringer.com/
- **Resume:**            `resume/index.html` → https://steffibehringer.com/resume

## Structure

```
/
├── index.html            Portfolio — the homepage
├── resume/
│   └── index.html        Resume (self-contained; CSS inline) → /resume
├── CNAME                 Custom domain for GitHub Pages (steffibehringer.com)
├── favicon.svg           Neon "S" on terracotta
├── build.py              Regenerates the minified bundles (optional)
├── css/
│   ├── main.css          Tokens, reset, typography, footer   ┐
│   ├── nav.css           Navigation                          │ source
│   ├── portfolio.css     Hero, grid, cards, modal            │ (edit these)
│   ├── pages.css         About + Contact                     ┘
│   └── styles.min.css    Generated bundle (loaded in production)
├── js/
│   ├── projects.js       ★ PROJECT DATA — the file you edit most
│   ├── nav.js            Page switching        ┐
│   ├── filter.js         Category filtering    │ source
│   ├── modal.js          Modal open/close/render + video │ (edit these)
│   ├── grid.js           Renders cards from data          ┘
│   └── app.min.js        Generated bundle (nav+filter+modal+grid)
└── images/               All project photos + video posters (JPG)
```

`portfolio.html` loads `css/styles.min.css`, then `js/projects.js` (readable),
then `js/app.min.js`.

## Adding / editing a project

Everything the grid and the modals show comes from **`js/projects.js`**.

1. Drop the project's images into `/images/` (e.g. `newproject_1.jpg`, …).
2. Copy one object in `js/projects.js`, fill in the fields (the file header
   documents every field), and add it to the `PROJECTS` array.

That's it — no HTML or CSS changes. `projects.js` is loaded un-minified on
purpose so this stays a one-file edit.

## Editing styles or behaviour

Edit the readable files in `css/` and `js/` (not the `.min` bundles), then
regenerate the bundles:

```bash
python3 build.py
```

Commit the updated `css/styles.min.css` and `js/app.min.js` alongside your
source changes.

## Videos

Each project's `videoId` embeds a YouTube video via a click-to-play poster
(fast, and no heavy player until clicked). A video only plays **inline** if,
in YouTube Studio for that video:

- **Allow embedding** is checked, and
- **Visibility** is Public or Unlisted (not Private).

Otherwise YouTube shows its own "Playback on other websites has been disabled"
notice inside the player. The `poster` images in `/images/*_poster.jpg` are
the YouTube thumbnails, self-hosted so the grid never depends on YouTube's CDN.

## Why `projects.js` and not `projects.json` + fetch()

`fetch()` of a local JSON file fails under the `file://` protocol (CORS), so
double-clicking the HTML to preview locally would break. A plain JS data file
works both locally and on GitHub Pages with zero server. Same "edit one object"
ergonomics, more robust.

## Deploy (GitHub Pages + custom domain)

Repo `steffibehringer/Resume2026`, branch `main`, served from root. Push the
files and Pages serves them — no build step on the server. `/` = Portfolio,
`/resume` = Resume.

Custom domain **steffibehringer.com** (registrar: Squarespace):

1. Repo → Settings → Pages → set Custom domain `steffibehringer.com`, tick
   Enforce HTTPS. (The `CNAME` file in this repo already sets it.)
2. In Squarespace DNS, point the apex at GitHub Pages:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  steffibehringer.github.io
   ```
   Remove conflicting Squarespace default records. DNS + SSL can take up to
   ~24h. The domain must not be attached to a Squarespace-built site.
