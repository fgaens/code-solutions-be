## Why

The homepage's individual profiles position the site partly as a consultancy CV rather than a presentation of Code Solutions' services and products. Remove the sections about Frederick and Mieke so visitors can focus on the company's work and contact options.

## What Changes

- Remove the homepage team section in English and Dutch, including portraits, names, roles, biographies, expandable background text, and personal social/CV links within that section.
- Remove the "Our team" / "Ons team" navigation item everywhere the shared navbar is used, so the site no longer links to the removed `#team` section.
- Preserve the adjacent company contact section, its `#contact` anchor, email address, and calls to action.
- Remove translation keys and CSS used exclusively by the removed profile section, without changing shared contact or responsive layout rules.
- Leave the remaining homepage sections in their existing order with no empty team-section space.

## Non-goals

- This is removal of the homepage personal-profile presentation, not a site-wide removal of every personal name or link.
- Do not remove or rewrite the Consultancy service, including its separate detail-page CV links, without a separate request.
- Do not remove blog author credits, article resources, existing profile image files, or site-level author/social configuration as part of this change.
- Do not change projects, client logos, demos, or the company contact method; no replacement team section or contact form is introduced.

## Capabilities

### New Capabilities

- `company-presentation`: A profile-free homepage and team-free shared navigation, with the company contact path preserved. No maintained specification currently covers this presentation.

### Modified Capabilities

None.

## Impact

- The main implementation areas are `_includes/contact.html`, `_includes/navbar.html`, `_i18n/en.yml`, `_i18n/nl.yml`, and profile-specific rules in `assets/css/style.scss`.
- Profiles and company contact currently share one include. Removing the entire include from the homepage would unintentionally remove the contact section and break existing contact links.
- No new dependencies, hosting changes, backend work, or data migration. Removing displayed profiles is not a request to erase source assets or historical attribution.
- This change remains independent of `streamline-product-demos` and `remove-project-search`.
