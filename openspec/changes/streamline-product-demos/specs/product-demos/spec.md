## Purpose

Let visitors try the portfolio's interactive demonstration applications directly from the homepage, with clear bilingual copy, selective loading, and accessible navigation.

## ADDED Requirements

### Requirement: Direct demo activation

The homepage SHALL present the selected application without a separate launch control, play icon, or dark launch overlay. With JavaScript enabled, the initially selected demo SHALL begin loading automatically when the demo section is visible or within 200 CSS pixels vertically of the viewport. Explicitly selecting a project tab SHALL begin loading that demo without requiring a second action.

#### Scenario: First arrival at the section
- **WHEN** a visitor approaches the demo section and has not selected another project
- **THEN** the initially selected SolarStash demo begins loading automatically
- **AND** the visitor can interact with it once it loads without clicking a launch button

#### Scenario: Another project is selected
- **WHEN** a visitor selects BuurHuur or Tafeltuin by pointer or keyboard
- **THEN** that project's panel becomes active and its demo begins loading if necessary
- **AND** no additional launch step is presented

### Requirement: Selective initialization and retained state

The page SHALL avoid initializing demos that have neither been selected nor qualified for initial viewport activation. Each demo SHALL initialize at most once per page visit, including when selection and viewport activation occur close together. Switching tabs SHALL retain previously loaded demo instances and their existing state.

#### Scenario: Visitor stays above the section
- **WHEN** the demo section is more than 200 CSS pixels outside the viewport and no demo tab has been selected
- **THEN** no embedded demo application is loaded

#### Scenario: Only the selected demo is needed
- **WHEN** the section activates with SolarStash selected
- **THEN** SolarStash loads and the unvisited BuurHuur and Tafeltuin demos remain unloaded

#### Scenario: Returning to a visited demo
- **WHEN** a visitor changes a SolarStash input, switches to BuurHuur, and returns to SolarStash
- **THEN** the existing SolarStash session and changed input are retained without reloading

#### Scenario: Selection overlaps automatic activation
- **WHEN** a visitor selects a project while the section's automatic activation is pending
- **THEN** the currently selected project loads at most once
- **AND** a later automatic activation does not create a duplicate or load a previously selected, still-uninitialized demo

### Requirement: Clear bilingual invitation

The section SHALL use the following localized introduction and SHALL no longer display the previous screenshot-comparison heading or claim that the demos operate exactly like the full applications.

| Copy | English | Dutch |
| --- | --- | --- |
| Eyebrow | Interactive demos | Interactieve demo's |
| Heading | Try it yourself. | Probeer het zelf. |
| Description | Choose a project and explore the demo. No account needed. | Kies een project en probeer de demo. Je hebt geen account nodig. |

#### Scenario: English homepage
- **WHEN** a visitor opens the English homepage
- **THEN** the demo introduction uses the English copy above
- **AND** the old heading and launch instructions are absent

#### Scenario: Dutch homepage
- **WHEN** a visitor opens the Dutch homepage
- **THEN** the demo introduction uses the Dutch copy above
- **AND** the old heading and launch instructions are absent

### Requirement: Accessible navigation without automatic focus transfer

The section SHALL preserve its labelled tablist, one selected tab, associated panels, and Arrow Left, Arrow Right, Home, and End keyboard navigation. Automatic activation or load completion SHALL NOT move keyboard focus into a demo or scroll the visitor to it. Embedded demos SHALL retain descriptive localized titles, and any loading status SHALL be localized and available to assistive technology.

#### Scenario: Keyboard selection
- **WHEN** a visitor uses an arrow key, Home, or End on a demo tab
- **THEN** selection and keyboard focus move to the corresponding tab
- **AND** only its associated panel is visible
- **AND** completing the demo load does not take focus away from that tab

#### Scenario: Automatic loading while reading
- **WHEN** the initial demo loads as a visitor scrolls through the page
- **THEN** the visitor's current focus and scroll position are not programmatically changed
- **AND** the loaded demo remains reachable through normal keyboard navigation

### Requirement: Activation does not perform in-app actions

Loading or selecting a demo SHALL NOT simulate an application action, start a Tafeltuin exercise, or enable sound. Existing application calculations and any timers already started by the visitor SHALL keep their existing behavior; tab switching SHALL NOT reset them.

#### Scenario: Tafeltuin is selected for the first time
- **WHEN** a visitor selects Tafeltuin
- **THEN** the demo opens at its normal initial screen
- **AND** an exercise and its timer start only through the application's own controls

### Requirement: Responsive display and fallback access

The embedded area SHALL reserve its display space while loading and SHALL remain contained within the page at desktop and mobile widths. The active panel's existing standalone link SHALL remain visible and usable independently of iframe loading, including when JavaScript is disabled or the embedded application fails to load. Application controls SHALL not be covered by a retained poster once the demo is displayed.

#### Scenario: Narrow viewport
- **WHEN** a visitor opens the section on a 320 CSS pixel wide viewport
- **THEN** tabs, the embedded area, and the standalone link remain accessible without horizontal page overflow

#### Scenario: Embedded loading fails
- **WHEN** an embedded application request fails
- **THEN** the panel's standalone link remains available
- **AND** the surrounding page and project tabs remain usable

#### Scenario: JavaScript is disabled
- **WHEN** a visitor opens the page with JavaScript disabled
- **THEN** the initially visible panel provides a usable standalone demo link without depending on a launch button

### Requirement: Existing routing and demo disclosures

Demo resources and standalone links SHALL use the shared deployment root rather than the language prefix. Language switching SHALL retain access to the same demo section. Existing synthetic-data and fictional-account disclosures SHALL remain visible, and the demo application interfaces SHALL remain Dutch.

#### Scenario: Domain-root deployment
- **WHEN** a visitor uses the English or Dutch homepage without a deployment prefix
- **THEN** SolarStash loads from `/demos/solarstash.html`, not `/nl/demos/solarstash.html`
- **AND** the surrounding disclosure uses the homepage's language

#### Scenario: Prefixed deployment
- **WHEN** the site is deployed under `/preview` and a visitor uses `/preview/nl/`
- **THEN** embedded and standalone demo URLs begin with `/preview/demos/`
- **AND** project-story links retain their localized `/preview/nl/` prefix

#### Scenario: Switching the site's language
- **WHEN** a visitor switches language from a homepage URL ending in `#demos`
- **THEN** the target homepage retains `#demos` and displays its localized introduction
