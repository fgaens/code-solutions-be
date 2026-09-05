## Betere vragen voor een grotere investering

Is een thuisbatterij financieel zinvol? Hoeveel overtollige zonnestroom kan ze opslaan, en welke capaciteit past bij een bepaald huishouden? Jaarlijkse elektriciteitstotalen alleen volstaan niet om die vragen te beantwoorden.

SolarStash is een prototype dat Vlaamse huishoudens ondersteunt bij die afweging. Het zet elektriciteitsgegevens per kwartier om in interactieve scenario's en brengt technische energiemodellering samen met begrijpelijke vergelijkingen van kosten en opbrengsten.

## Van metergegevens naar een bruikbare vergelijking

- **Importeren en verkennen.** Lees CSV-exports van Fluvius in, spoor ontbrekende gegevens op en bekijk hoe netafname en injectie van zonnestroom doorheen de tijd veranderen.
- **Scenario's vergelijken.** Modelleer het gedrag van een batterij, energieverliezen, vermogenslimieten, tariefstructuren en de effecten van het capaciteitstarief.
- **Afwegingen begrijpen.** Vergelijk geraamde besparingen, terugverdientijd, netto contante waarde en verschillende batterijcapaciteiten. Analyses van extra zonnepanelen en van de combinatie batterij en zonnepanelen bouwen voort op dezelfde werkwijze.

De interface houdt invoer, aannames en resultaten dicht bij elkaar. Een negatief investeringsresultaat hoort bij het antwoord en wordt niet verborgen.

## De techniek achter de interface

Een frontend in React en TypeScript toont grafieken en instelbare analyses. De backend met Java en Spring Boot verwerkt tijdreeksgegevens, voert simulaties per tijdsinterval uit en slaat resultaten op in PostgreSQL. De simulatie-engine staat los van het inladen van gegevens, zodat de berekeningen onafhankelijk getest kunnen worden.

De onderstaande schermen komen uit de echte applicatie en gebruiken een synthetische dataset met een jaar aan huishoudelijke elektriciteitsgegevens. SolarStash wordt hier getoond als softwareproject, niet als financieel advies of als een operationele dienst voor energiebeheer.
