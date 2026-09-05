## Why

The demo section currently looks like a video player and requires a second click before visitors can interact with an application. Remove that barrier and replace the defensive "Working software, not screenshots" heading with a direct invitation to try the demos.

## What Changes

- Remove the play button, dark launch overlay, and separate launch step from the homepage demo panels.
- Automatically load the initially selected demo as the section approaches the viewport. Selecting another project loads its demo without a second click.
- Load only demos that become relevant, and retain their iframe instances when switching tabs so in-page state is preserved.
- Use "Try it yourself." in English and "Probeer het zelf." in Dutch, with concise introductory copy that describes these as demos.
- Preserve accessible tab navigation, standalone links, demo-data disclosures, and the existing responsive frame layout. Loading must not move keyboard focus or start an exercise.

## Non-goals

- No promotional videos, Remotion integration, new application framework, or backend.
- No changes to calculations, rental workflows, game rules, timers, or persistent storage inside the demos.
- No change to project case studies, screenshots, client logos, or the Dutch language of the demo interfaces.

## Capabilities

### New Capabilities

- `product-demos`: The first maintained specification for the existing homepage demo section, covering direct activation, selective loading, state retention, localized copy, and accessible fallback navigation.

### Modified Capabilities

None. There is no existing maintained product-demo specification.

## Impact

- Expected implementation areas: `_includes/product-demos.html`, `assets/js/site.js`, demo-related rules in `assets/css/style.scss`, and the `demos` keys in `_i18n/en.yml` and `_i18n/nl.yml`.
- The on-click loading guidance in `AGENTS.md` will need to reflect the new behavior when implementation is applied.
- GitHub Pages hosting and existing demo URLs remain unchanged. No runtime dependencies or external data services are introduced.
- A selected demo can now execute before a visitor explicitly clicks a launch control. Limit initialization to viewport proximity or explicit tab selection; do not load every application during initial page startup. Existing synthetic-data and privacy boundaries remain unchanged.
