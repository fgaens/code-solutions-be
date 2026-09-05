## Context

See `proposal.md` for motivation and `specs/product-demos/spec.md` for the behavior contract.

The existing include renders three tab panels with poster images and launch buttons. The launch button is currently the only owner of the demo URL and iframe title. `assets/js/site.js` switches panels separately from loading: clicking a launch button creates an iframe, immediately hides its poster, and focuses the frame.

A design artifact is needed because replacing that click gate changes initialization timing, performance, keyboard focus, and state lifetime across the include, stylesheet, script, and translations. The embedded applications remain standalone files; this change does not require modifying them.

## Goals / Non-Goals

**Goals:**
- Reuse the existing panel and tab structure with one idempotent loading path.
- Bound automatic startup work to the currently selected application.
- Keep application state, page layout, and keyboard position stable through loading and tab changes.

**Non-Goals:**
- No framework, iframe communication protocol, new backend, or application rewrite.
- No persistence across page reloads beyond each demo's existing behavior.
- No new pause/resume semantics for applications hidden by a tab switch.

## Decisions

### One loader, two activation paths

Move each demo's URL and localized iframe title from the removed button to its persistent viewport container. Keep iframe `src` out of the initial markup.

Use an `IntersectionObserver` on the demo section with a vertical `rootMargin` of 200px. The initial activation loads the panel selected at callback time, not a hard-coded first panel. Explicit pointer or keyboard tab selection invokes the same loader immediately. Once either path activates a demo, stop the initial observer; it is not needed to reload panels on later scrolling.

The loader returns if its viewport already contains an iframe, including one still loading. This guards rapid selections and callbacks that have already been queued when the observer is disconnected.

Rejected alternatives: eager `src` attributes on all three frames would execute unvisited demos; removing only the triangle would retain the unwanted second action; observing every panel adds unnecessary triggers to a tabbed interface.

### Retain visited iframe instances

Continue toggling the panels' `hidden` state, rather than removing frames or clearing their sources. This preserves inputs and in-memory state without inventing a shared state store. At most the three visited demo instances remain mounted during a page visit.

### Replace the launch overlay with passive loading presentation

Remove the button and its icon, label, dark background, and obsolete launch-specific CSS. Keep the existing reserved viewport dimensions and poster as a temporary placeholder, never as a click gate.

While a frame is loading, show a small localized status such as "Loading demo..." / "Demo wordt geladen..." with a polite live region. Clear the status and remove the poster from interaction when the frame loads. Do not use an opaque full-panel overlay or imply that a load event proves the application's business logic is ready.

Keep the existing standalone link outside the viewport and independent of loading. It remains available for failed embeds and for the initially visible panel without JavaScript. No custom retry workflow or extra launch action is introduced.

### Keep focus on the visitor's chosen control

Remove the current automatic `frame.focus()` call. Retain the tablist's roving tabindex, selected state, panel associations, and navigation keys. Loading a panel must not interrupt keyboard traversal, while the iframe remains reachable through normal tab navigation. Do not trigger controls or enable sound inside a demo.

### Revise only the section's invitation

Use the exact English/Dutch copy in the capability spec. Remove launch-related translation keys once their remaining references are checked, and add matching loading-status keys. Preserve project names, tab descriptions, summaries, case-study links, and the demonstration-data disclosure.

## Risks / Trade-offs

- Automatic activation does more work than an untouched poster. Mitigation: start near the section or after explicit selection, and never initialize all three upfront. SolarStash's synthetic-year work remains confined to its own demo.
- Retained hidden frames use memory and can keep an already-started timer running. Mitigation: retain the existing application behavior and bound retained frames to the three demos; do not silently restart or pause an exercise.
- A slow or failed iframe can leave the placeholder visible, and iframe load events are not reliable application-health checks. Mitigation: preserve the standalone link and surrounding controls, and verify delayed and failed requests during implementation.
- Automatic activation can race with keyboard selection. Mitigation: inspect current selection at activation time and use iframe presence as the single initialization guard.
- Removing the dark overlay exposes changes in dimensions while a frame loads. Mitigation: preserve the existing responsive viewport sizing and verify no page overflow or layout jump.

## Migration Plan

Update the include, demo script, styles, and both dictionaries as one coherent change. Update the existing on-click loading paragraph in `AGENTS.md` during implementation. Keep demo URLs, `_data/demos.yml`, the standalone apps, and screenshot assets unchanged.

Validate the scenarios before publishing through the existing Bundler-based GitHub Pages workflow. No data migration or deployment-setting change is required. Rollback consists of restoring the previous include, script, styles, and copy together.

Keep this change's planning files inside the already-excluded `openspec/` tree; no authoring tool or planning file becomes a public site asset.
