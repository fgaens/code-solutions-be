## Purpose

Present the "AI for everyday life" course in English and Dutch, so that visitors understand the programme, formats, and prices and can request a session by email.

## ADDED Requirements

### Requirement: The course page is available in both languages

The site SHALL publish the course page at `/ai-everyday.html` in English and `/nl/ai-everyday.html` in Dutch. Each version SHALL render its copy, page title, and meta description in its own language from the shared translation dictionaries.

#### Scenario: English page
- **WHEN** a visitor opens `/ai-everyday.html`
- **THEN** the page shows the heading "AI for everyday life" with English copy
- **AND** the document title starts with "AI for everyday life"

#### Scenario: Dutch page
- **WHEN** a visitor opens `/nl/ai-everyday.html`
- **THEN** the page shows the heading "AI voor elke dag" with Dutch copy
- **AND** the document title starts with "AI voor elke dag"

### Requirement: The programme covers five modules including autonomous agents

The page SHALL list five modules in order: getting started; writing and documents; research, analysis and planning; reliability, privacy and security; and autonomous agents. Each module SHALL state its topics and the result a participant can expect.

#### Scenario: Agents module
- **WHEN** a visitor reads the programme in either language
- **THEN** the fifth module is "Autonomous agents" / "Autonome agents"
- **AND** it covers workflows, reusable skills, connections to mail, calendar and files, and scheduled tasks

### Requirement: Formats and prices are shown with a VAT-inclusive amount

The page SHALL present exactly three formats: a one-on-one session at €99 per 1.5 hours, a full programme of five one-on-one sessions at €450, and a group session at €325 per session, all excluding VAT. The page SHALL state the VAT-inclusive amount for each price. The page SHALL NOT offer online lessons, a self-paced course, or a waiting list.

#### Scenario: English prices
- **WHEN** a visitor opens the formats section on `/ai-everyday.html`
- **THEN** the cards show "€99" per 1.5-hour session, "€450" for 5 sessions and "€325" per session
- **AND** a note states that prices exclude 21% VAT and gives €119.79, €544.50 and €393.25 including VAT

#### Scenario: Dutch prices
- **WHEN** a visitor opens the formats section on `/nl/ai-everyday.html`
- **THEN** the cards show "€ 99" per sessie van 1,5 uur, "€ 450" voor 5 sessies and "€ 325" per sessie
- **AND** a note states "Prijzen exclusief 21% btw" and gives € 119,79, € 544,50 and € 393,25 including VAT

### Requirement: Visitors request a session by email

Each format card and the closing section SHALL offer an email link to the site's contact address with a subject that identifies the request. The page SHALL work without JavaScript.

#### Scenario: Booking a personal session
- **WHEN** a visitor activates "Book a session" / "Boek een sessie"
- **THEN** their mail client opens a message to the site's contact address with a subject naming the personal session

### Requirement: The course is reachable from shared navigation

The shared navigation and footer SHALL link to the course page in the current language. The link SHALL be marked as current on the course page. Language switching on the course page SHALL lead to the same page in the other language. All links SHALL resolve at the domain root and under a deployment prefix.

#### Scenario: Language switch
- **WHEN** a visitor on `/nl/ai-everyday.html` selects EN
- **THEN** they arrive at `/ai-everyday.html`

#### Scenario: Prefixed deployment
- **WHEN** the site is deployed under `/preview` and a visitor opens `/preview/nl/`
- **THEN** the course link in the navigation points to `/preview/nl/ai-everyday.html`

### Requirement: The page is responsive and keyboard accessible

The page SHALL reuse the site's design tokens, remain free of horizontal overflow on mobile widths, and keep every link and FAQ disclosure reachable by keyboard.

#### Scenario: Mobile layout
- **WHEN** a visitor opens the page at a 390px-wide viewport
- **THEN** cards and sections stack in a single column without horizontal scrolling
