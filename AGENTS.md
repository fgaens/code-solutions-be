# Repository Guidance

## Feature Planning

- Use repo-local `openspec/` for new feature proposals, specs, and tasks; keep independent features in separate changes. See `openspec/README.md` for the OpenCode commands and lifecycle.
- `/opsx-propose` is planning only. Review the generated artifacts before explicitly starting `/opsx-apply`; archive after implementation and verification. Repository-specific artifact guidance lives in `openspec/config.yaml`, not global `openspec config` settings.

## Commands and Validation

- This is a Jekyll static website, not a backend application despite the repository name. CI uses Ruby 3.2; `Gemfile.lock` records Bundler 2.6.2.
- Install with `bundle install`; serve locally with `bundle exec jekyll serve`.
- Validate with `JEKYLL_ENV=production bundle exec jekyll build --baseurl ""`. CI supplies the GitHub Pages base path instead of the empty local base path; see `.github/workflows/deploy.yml`.
- GitHub Settings > Pages must use **GitHub Actions** as its source. The built-in branch publisher / `actions/jekyll-build-pages` lacks the multilingual plugin and fails on `t`/`tf`; use the existing Bundler-based workflow instead.
- No separate test, lint, or typecheck suite is configured. For UI changes, also check English `/` and Dutch `/nl/`, including navigation and shared assets.
- `_site/` and Jekyll caches are generated and ignored; edit source files, not build output. Keep agent documentation in `_config.yml`'s `exclude` list to avoid publishing it.

## Content and Localization

- `jekyll-multiple-languages-plugin` drives localization: English is at `/`, Dutch at `/nl/`. Use `site.baseurl` for page links and `site.baseurl_root` for shared assets. Fall back to `site.baseurl` only when the root value is `nil`; an empty root is valid. Check nonempty deployment prefixes too.
- UI translations live in `_i18n/en.yml` and `_i18n/nl.yml`, referenced with Liquid tags such as `{% t global.home %}`. Keep both dictionaries aligned when adding UI copy.
- Services use paired `_services/<number>-<slug>-en.md` and `-nl.md` files. Their `summary` front matter feeds homepage cards; the Markdown body feeds detail pages. `_includes/services.html` filters by `lang`; dictionary service descriptions are not used.
- The `4-home-automation-*` pair now contains the combined Automation & AI service; its filenames preserve the existing service URLs.
- Blog posts live in `_i18n/en/_posts/`; Dutch blog navigation explicitly links to the English articles. Project collection documents stay in root `_projects/` and use `layout: post`; `projects.md` uses listing layout `project`.
- Projects include body-only Markdown from `_i18n/{en,nl}/projects/` via `{% tf projects/<slug>.md %}`. Shared front matter uses `translate_props` for localized metadata; screenshot alt/caption values are translation keys. Do not set `lang: en` on these bilingual documents or move the collection itself under `_i18n/`.
- Project `order` controls the listing; `featured: true` selects homepage entries (maximum two). Application screenshots live in `assets/images/projects/`; keep demo-data captions and full-size screenshots intact. Project pages intentionally omit dates rather than inventing launch dates.
- `assets/js/site.js` redirects Dutch-language browsers from the English homepage once per `language_redirect` cookie. Explicit language switching sets that cookie and preserves fragments; English-only posts switch to the target blog listing.

## Product Demos

- `demos/*.html` are standalone, self-contained applications: one HTML file each with its own inline CSS and JavaScript, no build step, no framework, no network calls. They have no YAML front matter, so Jekyll copies them verbatim as static files.
- `demos` is listed in `_config.yml`'s `exclude_from_localizations`, so each demo is served once at `/demos/<slug>.html` rather than duplicated under `/nl/`. The demo interfaces stay in Dutch because the applications themselves are Dutch; only the surrounding site copy is translated.
- Demo pages must work standalone and embedded. Each one shows its "back to Code Solutions" bar only when `window.top === window.self`, and derives that link from `window.location.pathname` so it survives a deployment base path.
- `_includes/product-demos.html` renders the homepage section from `_data/demos.yml` (slug, project title, poster image) plus `demos.*` keys in `_i18n/{en,nl}.yml`. The multilingual plugin expands Liquid inside `{% t %}` keys, which is what makes `{% t demos.{{ demo.slug }}.tagline %}` work. Keep both dictionaries aligned when adding a demo.
- Demos load only on demand: the panel shows the project cover image with a launch button, and `assets/js/site.js` creates the `iframe` on click. Do not add `src` to the markup, and keep the tablist's `aria-selected`/`tabindex` handling in that script.
- SolarStash generates a deterministic synthetic year (35,040 quarter-hour intervals, seeded PRNG) at load and caches simulation results per capacity/power. Its figures are modelled, never measured; keep the demo notice and the honest negative-outcome messaging intact.
- Projects link to their demo through the `demo` front matter key in `_projects/*.md`, rendered by `_layouts/post.html`.

## Layout and Styling

- `index.md` only selects `layout: default`. `_layouts/default.html` assembles homepage includes and does not render `{{ content }}`. Shared navigation behavior lives in `assets/js/site.js`; the blog listing filters its rendered cards via `_includes/search.html`; the Projects listing renders its full grid without a search control.
- `assets/css/style.scss` is the compiled stylesheet entrypoint; preserve its empty YAML front matter. `_sass/main.scss` defines design tokens and imports DM Sans and Bulma 0.8.2 from CDNs. Icons are inline SVG via `_includes/icon.html`; there is no Node asset build.
- `_includes/head.html` emits the complete `<head>` element. Layouts must not wrap it in another `<head>`; shared navigation's skip link targets `main#main-content`.
- Client order, sizing, and official asset sources live in `_data/clients.yml`; logos are local under `assets/images/clients/`. Preserve their official colors/proportions and the section's white background.
