## 1. Presentation and Copy

- [ ] 1.1 Remove the launch button and dark overlay from `_includes/product-demos.html`, retain demo URL/title data on the viewport, and remove obsolete launch CSS. Verify the rendered panels have no launch control, retain their reserved dimensions, and still expose the standalone links.
- [ ] 1.2 Update the English and Dutch demo introductions to the exact copy in the spec and add localized loading-status text. Verify both dictionaries remain aligned and that removed launch keys have no remaining references.

## 2. Activation and State

- [ ] 2.1 Add one idempotent iframe loader used by initial section-proximity activation and explicit tab selection. Verify no demo requests occur while the section is more than 200px away, only the selected demo loads on arrival, and selecting an unvisited tab requires no second action.
- [ ] 2.2 Retain existing iframe instances across tab changes and disconnect the initial observer after activation. Verify rapid switching and overlapping observer callbacks do not duplicate frames, load an outdated selection, or reset a previously changed SolarStash input.
- [ ] 2.3 Remove automatic iframe focusing and provide passive, localized loading feedback that does not cover a displayed application. Verify keyboard selection keeps focus on the tab, viewport activation does not move focus or scroll, and selecting Tafeltuin neither starts an exercise nor enables sound.

## 3. Integration Verification

- [ ] 3.1 Run `JEKYLL_ENV=production bundle exec jekyll build --baseurl ""` and `git diff --check`. Also build with `--baseurl "/preview"` into a separate temporary destination; verify both builds succeed and neither publishes OpenSpec artifacts.
- [ ] 3.2 Check English and Dutch homepages at desktop and 320px/390px mobile widths. Verify the localized introduction, correct tab/panel associations, all navigation keys, stable loading dimensions, no horizontal page overflow, and retained synthetic-data disclosures.
- [ ] 3.3 Verify all embedded and standalone demo URLs under both empty and nonempty deployment prefixes, including `/preview/nl/`. Verify project-story links remain localized and language switching preserves `#demos`.
- [ ] 3.4 Test delayed and failed iframe requests and a JavaScript-disabled page. Verify the active panel's standalone link remains available, tabs remain usable when JavaScript is enabled, and loading feedback is accessible without restoring a launch overlay.
- [ ] 3.5 Update the existing demo-loading guidance in `AGENTS.md` to describe viewport/tab activation and retained frames. Verify it matches the implemented behavior, then run `openspec validate streamline-product-demos --strict --no-interactive` and record the completed verification before checking off tasks.
