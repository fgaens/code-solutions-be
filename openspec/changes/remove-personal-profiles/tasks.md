## 1. Remove the Profile Presentation

- [ ] 1.1 Remove the team section from `_includes/contact.html` and the team link from `_includes/navbar.html`, retaining the contact include invocation and company contact markup. Verify rendered homepages contain no profile section or `#team` navigation link and still contain `#contact` with the configured email action.
- [ ] 1.2 Remove only unused profile/team translation keys from both dictionaries. Verify no remaining application template references those keys, both languages retain their contact copy, and no missing translations appear after rendering.
- [ ] 1.3 Remove profile-only CSS and responsive overrides, preserving rules shared with services and contact. Verify no live markup depends on the removed selectors and the remaining sections have no empty profile-sized gap.

## 2. Verify Contact and Site Regressions

- [ ] 2.1 Run `JEKYLL_ENV=production bundle exec jekyll build --baseurl ""` and `git diff --check`; verify both succeed without new errors. Also build with `/preview` as a nonempty base URL into a separate temporary destination.
- [ ] 2.2 Check English and Dutch homepages at desktop and 320px/390px mobile widths, with and without JavaScript. Verify profiles are absent from the DOM, accessibility tree, and image requests; contact remains visible, links are keyboard-usable, and there is no horizontal overflow.
- [ ] 2.3 Check the shared navbar on home, listing, article, project-detail, and service pages. Verify the team item is absent, remaining menu controls work, and contact navigation reaches the correct localized `#contact` destination under both empty and `/preview` deployment prefixes.
- [ ] 2.4 Verify the Consultancy detail content and its existing CV links, blog author credits and article resources, client section, projects, demos, and footer remain intact. Review the implementation diff to confirm unrelated author configuration, portrait assets, and other feature changes were not removed.
