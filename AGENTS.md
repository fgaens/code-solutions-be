# Repository Guidance

## Commands and Validation

- This is a Jekyll static website, not a backend application despite the repository name. CI uses Ruby 3.2; `Gemfile.lock` records Bundler 2.6.2.
- Install with `bundle install`; serve locally with `bundle exec jekyll serve`.
- Validate with `JEKYLL_ENV=production bundle exec jekyll build --baseurl ""`. CI supplies the GitHub Pages base path instead of the empty local base path; see `.github/workflows/deploy.yml`.
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

## Layout and Styling

- `index.md` only selects `layout: default`. `_layouts/default.html` assembles homepage includes and does not render `{{ content }}`. Shared navigation behavior lives in `assets/js/site.js`; listings filter their rendered cards via `_includes/search.html`.
- `assets/css/style.scss` is the compiled stylesheet entrypoint; preserve its empty YAML front matter. `_sass/main.scss` defines design tokens and imports DM Sans and Bulma 0.8.2 from CDNs. Icons are inline SVG via `_includes/icon.html`; there is no Node asset build.
- `_includes/head.html` emits the complete `<head>` element. Layouts must not wrap it in another `<head>`; shared navigation's skip link targets `main#main-content`.
- Client order, sizing, and official asset sources live in `_data/clients.yml`; logos are local under `assets/images/clients/`. Preserve their official colors/proportions and the section's white background.
