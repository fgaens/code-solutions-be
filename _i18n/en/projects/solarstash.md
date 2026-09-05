## Better questions before a bigger investment

Would a home battery make financial sense? How much solar surplus could it retain, and what capacity would suit a particular household? Annual electricity totals alone cannot answer those questions.

SolarStash is a decision-support prototype for Flemish households. It turns quarter-hour electricity data into interactive scenarios, bringing technical energy modelling and understandable financial comparisons together.

## From meter data to a useful comparison

- **Import and inspect.** Read Fluvius CSV exports, identify gaps in the data, and explore grid consumption and solar injection over time.
- **Compare scenarios.** Model battery behaviour, energy losses, power limits, tariff structures, and capacity-tariff effects.
- **Understand the trade-offs.** Compare projected savings, payback, net present value, and different battery capacities. Additional solar and combined battery/solar analyses extend the same workflow.

The interface keeps inputs, assumptions, and results close together. A negative investment result is part of the answer, not something to hide.

## Engineering behind the interface

A React and TypeScript frontend presents charts and configurable analyses. The Java and Spring Boot backend processes time-series data, runs interval-by-interval simulations, and persists results in PostgreSQL. The simulation engine is separated from data loading so its calculations can be tested independently.

The screens below come from the actual application, using a synthetic year of household data. SolarStash is presented here as a software project, not a financial recommendation or a production energy-management service.
