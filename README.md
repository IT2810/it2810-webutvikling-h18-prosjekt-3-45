# Personal Information and Motivation Manager

I dette prosjektet var oppgaven å lage en såkalt Personal Information and Motivation manager (PIMM). Vi har valgt å lage en applikasjon som er basert rundt gjøremål, såkalt todos, og applikasjonen vår er i praksis en integrert todo-liste og kalender. Brukeren kan registrere todos, som vises både i et listeformat og i en kalender. Dette er altså en form for mål for intellektuell aktivitet som brukeren kan registrere. I tillegg har vi gjort det mulig å registrere enkelte spesial-todos, som for eksempel innebærer å gå et bestemt antall skritt i løpet av en dag. Dette er altså et mål for fysisk aktivitet brukeren kan registrere. I tillegg kan brukeren registrere en slags meta-mål i form av antallet todos som brukeren ønsker å oppnå i løpet av en dag, noe vi håper vil bidra til at brukeren blir mer motivert. Hvis brukeren når dette meta-målet får brukeren en gratulerende melding. Kalenderen fargekodes også basert på hvor mange todos man oppnår avhengig av enten antall todos satt den dagen eller meta-målet, og vi håper at dette motiverer brukeren til å jobbe med sine oppsatte oppgave kontinuerlig.

## :warning: Oppstart

Dette prosjektet er satt opp med Expo, så i utgangspunktet trenger man kun kjøre `npm install -g expo-cli` og `expo start` for å starte opp prosjektet. _I tillegg har vi innført en konfigurasjonsfil, `config.js`, hvor man kan skru av og på pedometer-todos. Denne er innført fordi man kan få problemer med pedometer-todos og live reloading. Gjerne sjekk at variabelen i denne fila er satt itl `true` før du forsøker å teste pedometer-todos._

## Innhold og funksjonalitet

Applikasjonen er en prototype på et produkt, og et endelig produkt vil inkludere flere features, samt et mer raffinert design - ideelt sett burde vi bruke brukersentrerte metoder for å forbedre designet vårt basert på feedback. For å avgrense målene våre, har vi valgt å holde oss til funksjonaliteten beskrevet ovenfor. Meningen med oppgaven er å demonstrere teknologibruk. Resultatet av dette prosjektet er altså et minimum viable product på en applikasjon hvor brukeren kan legge til todos og få disse vist i en kalender eller en liste. Dette er altså en form for mål for intellektuell aktivitet som brukeren kan registrere. Todos kan ha en valgfri dato og en valgfri utdypende beskrivelse. I tillegg kan man lage en såkalt pedometer-todo som er en spesiell type todo som beskriver et mål om å gå et bestemt antall skritt i løpet av en spesifisert dato. Dette er altså et mål for fysisk aktivitet som brukeren kan registerere. Hvis man ikke spesifiserer noen dato, teller skrittene fra opprettelsesdatoen. Det er flere edge cases her, som for eksempel hva som burde skje hvis man har flere todos på samme dag. Disse vil for øyeblikket telle samtidig, men andre løsninger inkluderer å forby flere pedometer-todos på en dag, eller å telle en og en. Dette er slik funksjonalitet som vi hadde forsøkt å teste på faktiske potensielle brukere om dette hadde vært et reelt prosjekt jfr. teknikker fra MMI-faget.

Brukeren kan registrere en slags meta-mål i form av antallet todos som brukeren ønsker å oppnå i løpet av en dag, noe vi håper vil bidra til at brukeren blir mer motivert. Hvis brukeren når dette meta-målet, får brukeren en gratulerende melding i form av en toast-melding. Kalenderen fargekodes også basert på hvor mange todos man oppnår, og vi håper at dette motiverer brukeren til å jobbe med sine oppsatte oppgave kontinuerlig. Fargekoden er basert blant annet på målet for daglig antall todos som brukeren velger i settings. Vi håper dette også kan motivere brukeren til å gjøre en ønsket mengde todos hver dag i tillegg til å opprettholde todo-streaken for å unngå gap av fargeløshet i kalenderen.

## Teknologi

Applikasjonen bruker React Native og er satt opp ved hjelp av Expo. Vi har også forsøkt å velge hensiktsmessige tredjepartsbiblioteker for å hjelpe oss med utviklingen. Et av de største bibiotekene vi har valgt å bruke er NativeBase, som er en samling UI-komponentet for React Native, som fungerer på både iOS og Android. Dette har latt oss spare mye tid med designet av applikasjonen, da vi har kunnet forholde oss til ferdiglagde komponenter for knapper og lignende i stedet for å implementere de selv, som i tillegg ser innebygde ut. I tillegg har vi eksterne komponenter for dato-velgere, tall-input og progresjonsbarer. Vi bruker også biblioteket Swipeout for å håndtere swiping av todos i de forskjellige todo-listene. En oversikt over alle prosjektets avhengigheter vil man naturlig nok finne i `package.json`.

I applikasjonen vår kan man legge til nye elementer i form av forskjellige typer todos. Disse todo-elementene lagres ved hjelp av Redux, og det som ligger lagret i Redux ligger også lagret i AsyncStorage. Dette kan du lese mer om senere i dette dokumentet, i Redux-tutorialen vår. Videre var det et krav om at man skulle utforske en teknologi som går utover vanlig React Native UI-problematikk, og her har vi vaglt å utforske pedometer-funksjonalitet gjennom Expo sitt API.

- Fortelle litt om testing, hvorfor appen er plattformuavhengig og fungerer på ios/android
- Fortelle masse om Jest!

Vi har brukt Git og GitHub aktivt i utviklingen og forsøkt å følge gode og etablerte praksiser rundt bruk av Git. Vi har dekomponert utviklingen i tasks, og hver task er lagt inn som en issue på GitHub. Videre har vi assignet hver issue som vi har gjort til en person på gruppen, slik at man får en oversikt over hvem som har gjort hva.

Oppgaven oppgir et krav om å markere commits med hviken issue de bidrar til. Vi har ikke markert hver individuelle commit med en issue, men vi mener dette kravet er tilfredsstilt gjennom at vi har gjennomført all utvikling i separate branches, som er koblet opp mot issues gjennom navnet på branchen. Dette fører til at hver PR linker til en issue, og issuen linker til pull requesten, slik at man i fra alle gjorte issues kan se hvem som gjorde den, samt hvilken pull request den ble løst i. Dette var relativt utbredt praksis i programvareutvikling, og i følge et spørsmål på dette fagets Piazza burde det være greit å gjøre det slik.

All utviklingen i dette prosjektet foregikk på GitHub. Vi har forsøkt å dekomponere utviklinger i tasks som ligger lagret som issues. Oppgaven lister et krav om å markere commits med hvilken issue de bidrar til. Vi har ikke gjort dette ved å eksplisitt markere issuene i hver eneste commitmelding da dette ikke virker som en veldig utbredt praksis. Det vi derimot har gjort er å gjøre all utvikling i separate branches som følger et navngivingssystem hvor branchen er koblet opp mot en issue. For eksempel er alle endringer tilknyttet dette dokumentet gjort i branchen feat-#13-readme og dermed koblet opp i mot issue 13, som handler om å legge til dokumentasjon. Dette var også akseptabel praksis i faget programvareutvikling.

~/WebstormProjects/Webteknologi2810/Prosjekt3/it2810-webutvikling-h18-prosjekt-3-45 | feat-#22-readme\* $

plattformuavhengig: fungerer på både ios og android
dekomponere i tasks, issues, markere commits, assigner folk
oversikt over filer
oversikt over komponenter som er brukt
noe om utforsnkning

### Pedometer

### Redux

rect, react native, tredjeparts komponetner, bibliotekre og api, persistent data, git, gruppearbeid, fordeling,
