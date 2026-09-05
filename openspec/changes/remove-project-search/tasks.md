## 1. Remove Project Search

- [x] 1.1 Remove the project-search include from `_layouts/project.html`, leaving the shared search include and blog layout unchanged. Verify the Projects markup contains no search field, label, result-status element, or inline filtering initialization, while the project grid and order remain intact.

## 2. Verify the Listing and Regressions

- [x] 2.1 Run `JEKYLL_ENV=production bundle exec jekyll build --baseurl ""` and `git diff --check`; verify both succeed without new errors.
- [x] 2.2 Inspect `/projects.html` and `/nl/projects.html` at desktop and 320px/390px mobile widths, with and without JavaScript. Verify all three projects remain visible in order, no search-related gap or keyboard target remains, and the page has no horizontal overflow.
- [x] 2.3 Build with a nonempty `/preview` base URL into a temporary destination. Verify project images, detail links, and English/Dutch listing switches work under the deployment prefix without losing localization.
- [x] 2.4 Verify English blog filtering, no-results messaging, and clearing the query still work; verify the Dutch blog's English-article link and BuurHuur demo search are unchanged. Confirm no browser errors result from the removed project search.
