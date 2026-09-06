## Purpose

Present the portfolio as a directly browsable, localized project listing without an unnecessary search control, while preserving project navigation and unrelated search behavior.

## ADDED Requirements

### Requirement: Projects are presented without search

The Projects listing SHALL NOT render a project-search input, search label, search-result status region, or project filtering initialization. The page SHALL place the project grid after its introduction without a reserved search-control gap. Removal SHALL apply in both site languages, rather than hiding the control only visually.

#### Scenario: English listing
- **WHEN** a visitor opens `/projects.html`
- **THEN** the listing contains no "Search projects" control or search-related keyboard focus target
- **AND** the project grid follows the introduction without an empty search area

#### Scenario: Dutch listing
- **WHEN** a visitor opens `/nl/projects.html`
- **THEN** the listing contains no "Zoek projecten" control or search-related keyboard focus target
- **AND** no project-search status or filtering behavior is initialized

### Requirement: The complete portfolio remains visible

The listing SHALL display every project in its configured order, retaining localized categories and descriptions, images, and project detail links. Removing search SHALL NOT change which projects are listed or make visibility dependent on JavaScript.

#### Scenario: Current three-project portfolio
- **WHEN** a visitor opens either language's Projects listing with the current content
- **THEN** SolarStash, BuurHuur, and Tafeltuin are visible in that order
- **AND** each card retains its existing localized content and link

#### Scenario: JavaScript is disabled
- **WHEN** a visitor opens the Projects listing with JavaScript disabled
- **THEN** all project cards and their detail links remain available without a search control

### Requirement: Listing navigation and responsive layout are preserved

Project links and language switching SHALL continue to resolve correctly at the domain root and under a deployment prefix. The listing SHALL remain usable by keyboard and on mobile without horizontal page overflow introduced by the removal.

#### Scenario: Prefixed Dutch listing
- **WHEN** the site is deployed under `/preview` and a visitor opens `/preview/nl/projects.html`
- **THEN** all project links retain the `/preview/nl/` prefix
- **AND** switching to English retains the Projects listing at `/preview/projects.html`

#### Scenario: Mobile keyboard access
- **WHEN** a visitor uses a 320 CSS pixel wide viewport and keyboard navigation
- **THEN** project links remain reachable and usable
- **AND** no removed search control receives focus or creates horizontal page overflow

### Requirement: Unrelated search remains unchanged

Removing search from the Projects listing SHALL NOT remove or alter the English blog's search, the Dutch blog's existing English-article link, or search inside any standalone or embedded product demo.

#### Scenario: English blog filtering
- **WHEN** a visitor searches the English blog, enters a query with no matches, and then clears it
- **THEN** filtering, the existing no-results message, and restoration of all article cards continue to work

#### Scenario: Dutch blog navigation
- **WHEN** a visitor opens the Dutch blog listing
- **THEN** its existing explanation and link to the English articles remain available

#### Scenario: Product-demo catalogue search
- **WHEN** a visitor searches the BuurHuur demo catalogue
- **THEN** its existing application-level filtering remains unchanged
