## Purpose

Present Code Solutions' services and products without homepage personal-profile sections, while retaining accessible company contact options and consistent navigation throughout the bilingual site.

## ADDED Requirements

### Requirement: Homepage personal profiles are absent

The English and Dutch homepages SHALL NOT render the team section or its individual profiles for Frederick and Mieke. This removal SHALL include portraits, role descriptions, biographies, expandable background content, and personal social/CV links belonging to that section. The content SHALL be removed from the rendered page, not merely hidden by styling.

#### Scenario: English homepage
- **WHEN** a visitor opens the English homepage
- **THEN** the individual profiles, team introduction, and profile-specific controls are absent from the page and accessibility tree
- **AND** the page does not request either portrait for the removed section

#### Scenario: Dutch homepage
- **WHEN** a visitor opens `/nl/`
- **THEN** the Dutch team introduction, personal biographies, portraits, and profile links are absent
- **AND** no untranslated profile key or placeholder appears in their place

### Requirement: Shared navigation has no team destination

Every page using the shared navigation SHALL omit the "Our team" / "Ons team" item and its `#team` destination. The remaining services, projects, blog, language-switch, and company-contact navigation SHALL retain their existing behavior.

#### Scenario: Navigating from a secondary page
- **WHEN** a visitor opens a project, blog, article, or service page in either language
- **THEN** its navigation contains no link to the removed team section
- **AND** its remaining homepage-section links point to the correct localized homepage

#### Scenario: Mobile keyboard navigation
- **WHEN** a visitor opens the mobile menu and navigates using the keyboard
- **THEN** there is no team link or empty focus target
- **AND** the remaining links, language switch, and contact action are usable

### Requirement: Company contact remains available

The homepage SHALL retain its company contact section, `#contact` anchor, localized contact copy, configured email address, and email action. Existing contact links SHALL continue to reach that section or the configured email address as appropriate, including without JavaScript.

#### Scenario: Contact from the homepage
- **WHEN** a visitor follows the header's contact action on either language's homepage
- **THEN** the existing company contact section remains the destination
- **AND** the contact email action uses the configured company address

#### Scenario: Contact under a deployment prefix
- **WHEN** a visitor follows the contact action from a Dutch page hosted under `/preview`
- **THEN** the destination is `/preview/nl/#contact`
- **AND** the section exists and remains operable without relying on the removed profiles

#### Scenario: Contact without JavaScript
- **WHEN** a visitor opens the homepage with JavaScript disabled
- **THEN** the company contact section and email links are still available through normal navigation

### Requirement: Removal preserves the surrounding layout and content

The remaining homepage sections SHALL keep their existing relative order and flow into the company contact section without an empty team-sized gap. Desktop and mobile layouts SHALL remain within the viewport. Profile removal SHALL NOT remove the Consultancy service, project content, demos, client section, footer, or existing blog author credits.

#### Scenario: Responsive homepage flow
- **WHEN** a visitor views either language at desktop or 320px/390px mobile widths
- **THEN** the page contains no empty team-section container or leftover profile controls
- **AND** company contact and the footer remain visible without horizontal page overflow

#### Scenario: Existing content outside the profiles
- **WHEN** a visitor opens the Consultancy detail page or an existing blog article
- **THEN** the service remains available with its existing detail content
- **AND** article author credits and technical-resource links remain unchanged
