## Why

Code Solutions wants to offer personal AI coaching to private individuals, self-employed professionals, and local associations. The site has no place that explains this offer, its programme, or its prices, so visitors cannot discover or request it.

## What Changes

- Add a bilingual course page, "AI for everyday life" / "AI voor elke dag", at `/ai-everyday.html` and `/nl/ai-everyday.html`.
- Present the offer in sections: introduction, recognisable situations, three learning steps, audience, a five-module programme ending with autonomous agents, formats with prices, frequently asked questions, and a contact call to action.
- Offer three formats, all in person and requested by email: a one-on-one session (€99 per 1.5 hours), a full programme of five one-on-one sessions (€450), and a group session for associations, libraries, and municipalities (€325 per session). Prices are shown excluding VAT, with the VAT-inclusive amounts stated below them.
- Add an "AI Course" / "AI-cursus" link to the shared navigation and the footer, and make language switching and the canonical URL resolve to the course page.

## Non-goals

- No online lessons, self-paced video course, waiting list, or live online cohort.
- No online payment, booking calendar, or contact form; requests go through `mailto:` links.
- No trainer profile or personal portrait on the page, in line with the removal of personal profiles from the homepage.
- No new homepage service card and no changes to the existing Automation & AI service.

## Capabilities

### New Capabilities

- `ai-course`: A localized page that presents the AI course, its programme, formats, and prices, and lets visitors request a session by email.

### Modified Capabilities

None.

## Impact

- New `ai-everyday.md` page, rendered by the new `_layouts/course.html` from a `course` tree in `_i18n/en.yml` and `_i18n/nl.yml`.
- `_includes/navbar.html`, `_includes/footer.html`, and `_includes/meta.html` gain a course link, language-switch path, and canonical path.
- `assets/css/style.scss` gains `course-*` rules that reuse the existing design tokens.
- Prices and offer terms are public commercial statements; consumers must be able to see the VAT-inclusive price.
- No new dependencies, hosting changes, tracking, or data collection.

## Planning Notes

`design.md` is deliberately omitted under the schema's conditional rule: the page is a static layout fed by translation data, with no architectural, dependency, data-model, security, or migration decision to resolve.
