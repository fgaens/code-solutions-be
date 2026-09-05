## Useful things, closer to home

A drill for a weekend job, a tent for a short trip, or a projector for an evening with friends: plenty of useful items spend most of their time sitting unused.

BuurHuur explores a simple alternative to buying everything yourself. This Dutch-language rental-platform MVP lets people publish items and manage rental requests through one clear interface.

## More than a catalogue

- **Find an item.** Browse cards or a compact list, search by title, filter by category, and compare daily prices.
- **Manage what you offer.** Create and edit listings, upload images, and pause or reactivate items when circumstances change.
- **Keep requests organised.** Request dates, include a message, and follow incoming and outgoing requests. Owners can accept or decline; renters can cancel pending requests.
- **Sign in without a password.** A single-use email link establishes the user's session.

The focus is on a straightforward request workflow. Payments and handover remain offline; this version is not a complete payment or availability-management system.

## A connected Java application

The application combines Vaadin's server-side UI with Spring Boot, Spring Security, and PostgreSQL. Shared services connect the catalogue, ownership checks, and request states, while Liquibase manages the database schema.

The refreshed light theme keeps navigation, categories, and status indicators consistent across desktop and mobile. The portfolio demonstration uses fictional accounts, original item illustrations, and requests entered through the real application, rather than a static interface mockup.
