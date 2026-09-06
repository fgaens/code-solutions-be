## Context

See `proposal.md` for the motivation and scope. The homepage calls `_includes/contact.html` once, and that include renders both `section#team` and `section#contact`. The shared navbar links to both destinations through separate controls.

This design is included because the removal crosses shared navigation, contact markup, translations, and responsive style rules. A blanket removal of the include or its neighboring styles would change the company contact path as well as the personal profiles.

## Goals / Non-Goals

**Goals:**
- Make the contact include solely responsible for company contact without changing its caller or anchor.
- Remove profile-only dependencies while keeping shared layout and attribution intact.

**Non-Goals:**
- No new section, component framework, contact form, or redirect mechanism.
- No deletion of historical authorship or personal assets; broader content removal is outside this change.

## Decisions

### Retain the contact include and its existing public destination

Remove the team section from `_includes/contact.html`, not the include invocation in `_layouts/default.html`. Keep the company contact markup and `#contact` destination in place. Remove the include's asset-root assignments if the remaining contact content no longer uses them.

This avoids a new include or a rename for content that already has an appropriate filename. Hiding the team with CSS is rejected because its biography text, links, and image references would remain in the document.

### Remove the team link at the shared navigation source

Remove the navbar's `#team` link in one place so homepage and secondary-page navigation agree. Keep the remaining links and menu/language-switch behavior unchanged; the current script has no team-specific logic to replace.

The old `#team` fragment is retired rather than repurposed as contact or an invisible section. Existing bookmarks still load the homepage, but no longer target a personal-profile section.

### Clean up only profile-specific copy and styling

Remove the now-unreferenced biography, team, role, profile-summary, resume-label, and team-navigation keys from both translation dictionaries together. Keep the neighboring company contact keys. Verify references before removing any key.

Remove `.team-*` and `.person-*` rules used only by the deleted markup, including responsive overrides. Where `.team-grid` shares a rule with `.services-grid` and `.contact-grid`, remove only the team selector. Do not compensate for the removed section with an empty spacer or redesign the remaining navbar.

### Preserve content with a different purpose

Blog bylines use post-level author fields, and the Consultancy detail pages have their own CV links. Leave those files unchanged. Keep existing author/social configuration, portraits, and the unused legacy `about.html` include; none needs to be removed to stop rendering homepage profiles. This is presentation cleanup, not a privacy-erasure operation.

## Risks / Trade-offs

- Removing the entire contact include would break company contact links. Mitigation: retain the caller and verify `#contact` and mail links on both homepages and from secondary pages.
- Shared CSS or translation cleanup could break unrelated UI. Mitigation: remove only verified profile-only references and check mobile service/contact layouts after cleanup.
- A stale menu item would point to a removed section. Mitigation: inspect the rendered shared navbar across page types, not only the homepage.
- Names and CV links remain elsewhere on the site. Mitigation: document that boundary explicitly and leave broader positioning or attribution changes to a separate request.

## Migration Plan

Apply the markup, navigation, translation, and stylesheet changes together. No data migration, new dependency, or hosting adjustment is needed. The existing static build and asset-versioning flow remain sufficient.

Validate both languages and deployment prefixes before publishing. If rollback is needed, restore the scoped profile markup, navigation item, keys, and styles together. Keep these planning artifacts in the existing excluded `openspec/` directory.
