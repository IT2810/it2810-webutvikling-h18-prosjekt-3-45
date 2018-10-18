# Personal Information and Motivation Manager

I dette prosjektet var oppgaven å lage en såkalt Personal Information and Motivation manager. Vi har valgt å lage en applikasjon som er basert rundt todos, og applikasjonen vår er i praksis en integrert todo-liste og kalender. Brukeren kan registrere todos, som vises både i et listeformat og i en kalender. Dette er altså en form for mål for intellektuell aktivitet som brukeren kan registrere. I tillegg har vi gjort det mulig å registrere enkelte spesial-todos, som for eksempel todos som innebærer å gå et bestemt antall skritt i løpet av en dag. Dette er altså et mål for fysisk aktivitet brukeren kan registrere. I tillegg kan brukeren registrere en slags meta-mål i form av antallet todos som brukeren ønsker å oppnå i løpet av en dag, noe vi håper vil bidra til at brukeren blir mer motivert. Hvis brukeren når dette meta-målet, får brukeren en gratulerende melding. Kalenderen fargekodes også basert på hvor mange todos man oppnår, og vi håper at dette motiverer brukeren til å jobbe med sine oppsatte oppgave kontinuerlig.

## :warning: Oppstart

Dette prosjektet er satt opp med Expo, så i utgangspunktet trenger man kun kjøre `npm install -g expo-cli` og `expo start` for å starte opp prosjektet. I tillegg har vi innført en konfigurasjonsfil, `config.js`, hvor man kan skru av og på pedometer-todos. Denne er innført fordi man kan få problemer med pedometer-todos og live reloading. Gjerne sjekk at variabelen i denne fila er satt itl `true` før du forsøker å teste pedometer-todos.

## Innhold og funksjonalitet

Applikasjonen er en prototype på et produkt, og et endelig produkt vil inkludere flere features, samt et mer raffinert design - ideelt sett burde vi bruke brukersentrerte metoder for å forbedre designet vårt basert på feedback. For å avgrense målene våre, har vi valgt å holde oss til funksjonaliteten beskrevet ovenfor. Meningen med oppgaven er å demonstrere teknologibruk. Resultatet av dette prosjektet er altså et minimum viable product på en applikasjon hvor brukeren kan legge til todos og få disse vist i en kalender eller en liste. Todos kan ha en valgfri dato og en valgfri utdypende beskrivelse. I tillegg kan man lage en såkalt pedometer-todo, som beskriver et mål om å gå et bestemt antall skritt i løpet av en spesifisert dato. Hvis man ikke spesifiserer noen dato, teller skrittene fra opprettelsesdatoen. Det er flere edge cases her, som for eksempel hva som burde skje hvis man har flere todos på samme dag. Disse vil for øyeblikket telle samtidig, men andre løsninger inkluderer å forby flere pedometer-todos på en dag, eller å telle en og en. Dette er slik funksjonalitet som vi, om dette hadde vært et reelt prosjekt, hadde forsøkt å teste på faktiske potensielle brukere, jfr. teknikker fra MMI-faget.

## Teknologi

Applikasjonen bruker React Native og er satt opp ved hjelp av Expo.

- Tredjepartsbiblioteker: Expo, NativeBase

I applikasjonen vår kan man legge til nye elementer i form av forskjellige typer todos. Disse todo-elementene lagres ved hjelp av Redux, og det som ligger lagret i Redux ligger også lagret i AsyncStorage. Dette kan du lese mer om senere i dette dokumentet, i Redux-tutorialen vår. Videre var det et krav om at man skulle utforske en teknologi som går utover vanlig React Native UI-problematikk, og her har vi vaglt å utforske pedometer-funksjonalitet gjennom Expo sitt API.

- Fortelle litt om testing, hvorfor appen er plattformuavhengig og fungerer på ios/android
- Fortelle masse om Jest!

- Fortelle om git
  plattformuavhengig: fungerer på både ios og android
  git: ryddig, kommentering, navngiving, best practice
  dekomponere i tasks, issues, markere commits, assigner folk

oversikt over filer
oversikt over komponenter som er brukt

noe om utforsnkning

### Pedometer

### Redux

rect, react native, tredjeparts komponetner, bibliotekre og api, persistent data, git, gruppearbeid, fordeling,
