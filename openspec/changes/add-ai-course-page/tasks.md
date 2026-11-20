## 1. Build the Course Page

- [x] 1.1 Add `ai-everyday.md` with `layout: course` and translated `title` and `description`, and add `_layouts/course.html` rendering the hero, recognisable situations, three steps, audience, programme, formats, FAQ, and contact sections from the `course` translation tree.
- [x] 1.2 Add the aligned `course` tree and the `global.ai-course` label to `_i18n/en.yml` and `_i18n/nl.yml`, including the five modules, the three formats with prices excluding VAT, and the VAT-inclusive note.
- [x] 1.3 Add the course link to `_includes/navbar.html` and `_includes/footer.html`, and set the course language-switch path and canonical path in `_includes/navbar.html` and `_includes/meta.html`.
- [x] 1.4 Add `course-*` rules to `assets/css/style.scss`, reusing the existing design tokens and breakpoints.

## 2. Verify

- [x] 2.1 Run `JEKYLL_ENV=production bundle exec jekyll build --baseurl ""` and `git diff --check`; verify both succeed without new errors.
- [x] 2.2 Inspect `/ai-everyday.html` and `/nl/ai-everyday.html` at desktop and 390px mobile widths. Verify the heading, five modules, both prices, and the VAT note render in the right language, and the page has no horizontal overflow.
- [x] 2.3 Build with a nonempty `/preview` base URL into a temporary destination. Verify the navigation, footer, language-switch, and stylesheet links keep the deployment prefix in both languages.
- [x] 2.4 Verify the homepage navigation shows the course link without wrapping at a 1000px-wide viewport, and that every `mailto:` link carries the contact address and an encoded subject.
