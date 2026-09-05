## Why

The Projects listing contains only three entries, so its search field adds an unnecessary step and visual clutter. Visitors should see the complete portfolio directly below the page introduction.

## What Changes

- Remove project search, its label, result-status area, and filtering initialization from the English and Dutch Projects listings.
- Keep all projects visible in their existing order, with unchanged localized descriptions, images, and detail links.
- Preserve blog search and the shared resources it uses.

## Non-goals

- No changes to search inside an embedded demo, the demo-launch experience, or project detail pages.
- No pagination, category filters, or automatic project-count threshold for restoring search.
- No deletion of shared search functionality, styling, or `search.json` as part of this change.

## Capabilities

### New Capabilities

- `project-listing`: Record the existing portfolio listing's behavior without a project-search control. No maintained specification exists for this capability yet.

### Modified Capabilities

None.

## Impact

- Scope assumption: "Product page" means `projects.md`, rendered by `_layouts/project.html` at `/projects.html` and `/nl/projects.html`.
- The project layout currently includes `_includes/search.html`, which emits both the search markup and its inline filtering script. Removing that invocation is sufficient; the blog's invocation must remain.
- No new dependencies, hosting changes, data migration, or privacy implications.
- This change is independent of `streamline-product-demos` and does not modify its artifacts or implementation scope.

## Planning Notes

`design.md` is deliberately omitted under the schema's conditional rule: this is a single-layout include removal, with no architectural, dependency, data-model, security, or migration decision to resolve. The specs and tasks are sufficient for implementation.
