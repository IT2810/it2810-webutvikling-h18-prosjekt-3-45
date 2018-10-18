# Personal Information and Motivation Manager

I dette prosjektet var oppgaven å lage en såkalt Personal Information and Motivation manager, heretter referert til som en PIMM. Vi har valgt å lage en applikasjon som er basert rundt gjøremål, såkalte todos, og applikasjonen vår er i praksis en integrert todo-liste og kalender.

## :warning: Oppstart

Dette prosjektet er satt opp med Expo, så i utgangspunktet trenger man kun kjøre `npm install`, `npm install -g expo-cli` og `expo start` for å starte opp prosjektet. _I tillegg har vi innført en konfigurasjonsfil, `config.js`, hvor man kan skru av og på pedometer-todos. Denne er innført fordi man kan få problemer med pedometer-todos og live reloading. Gjerne sjekk at variabelen i denne fila er satt til `true` før du forsøker å teste pedometer-todos, selv om den skal være det._

Testene kan kjøres ved `npm test`.

## Innhold og funksjonalitet

Applikasjonen er en prototype på et produkt, og et endelig produkt vil inkludere flere features, samt et mer raffinert design - ideelt sett burde vi bruke brukersentrerte metoder for å forbedre designet vårt basert på feedback. For å avgrense målene våre, har vi valgt å holde oss til funksjonaliteten beskrevet ovenfor siden meningen med oppgaven er å demonstrere teknologibruk, men tanken er at applikasjonen i framtiden skal kunne ha mange slags forskjellige todos, som for eksempel GPS-baserte todos i tillegg til pedometer-baserte todos, men dette utgår i første iterasjon av applikasjonen.

Resultatet av dette prosjektet er altså et minimum viable product på en applikasjon hvor brukeren kan legge til todos og få disse vist i en kalender eller en liste. Dette er altså en form for mål for intellektuell aktivitet som brukeren kan registrere. Todos kan ha en valgfri dato og en valgfri utdypende beskrivelse. I tillegg kan man lage en såkalt pedometer-todo som er en spesiell type todo som beskriver et mål om å gå et bestemt antall skritt i løpet av en spesifisert dato. Dette er altså et mål for fysisk aktivitet som brukeren kan registerere. Hvis man ikke spesifiserer noen dato, teller skrittene fra opprettelsesdatoen. Det er flere edge cases her, som for eksempel hva som burde skje hvis man har flere todos på samme dag. Disse vil for øyeblikket telle samtidig, men andre løsninger inkluderer å forby flere pedometer-todos på en dag, eller å telle en og en. Dette er slik funksjonalitet som vi hadde forsøkt å teste på faktiske potensielle brukere om dette hadde vært et reelt prosjekt jfr. teknikker fra MMI-faget.

Ved swiping av “uferdige” pedometertodos vil brukeren få et varsel. Da vi både har implementert angrefunksjon i toastmeny og muligheten til å “undone” todos så fungerer IKKE dette varselet som en angrefunksjon. Varselmeldingen representerer en motiverende faktor for at det ikke skal være lett for brukeren å swipe “done” på pedometer todos som ikke har blitt tilfredsstilt.

Brukeren kan registrere en slags meta-mål i form av antallet todos som brukeren ønsker å oppnå i løpet av en dag, noe vi håper vil bidra til at brukeren blir mer motivert. Hvis brukeren når dette meta-målet, får brukeren en gratulerende melding i form av en toast-melding. Kalenderen fargekodes også basert på hvor mange todos man oppnår, og vi håper at dette motiverer brukeren til å jobbe med sine oppsatte oppgave kontinuerlig. Fargekoden er basert blant annet på målet for daglig antall todos som brukeren velger i settings. Vi håper dette også kan motivere brukeren til å gjøre en ønsket mengde todos hver dag i tillegg til å opprettholde todo-streaken for å unngå gap av fargeløshet i kalenderen.

## Teknologi

Applikasjonen bruker React Native og er satt opp ved hjelp av Expo. Vi har også forsøkt å velge hensiktsmessige tredjepartsbiblioteker for å hjelpe oss med utviklingen. Et av de største bibiotekene vi har valgt å bruke er NativeBase. Dette er en samling UI-komponentet for React Native som fungerer på både iOS og Android. Biblioteket har latt oss spare mye tid med design av applikasjonen fordi vi kunne forholde oss til ferdiglagde komponenter for knapper og lignende i stedet for å implementere de selv. I tillegg har vi eksterne komponenter for dato-velgere, tall-input, tab-navigasjon og progresjonsbarer. Vi bruker også biblioteket Swipeout for å håndtere swiping av todos i de forskjellige todo-listene. En oversikt over alle prosjektets avhengigheter vil man naturlig nok finne i `package.json`.

I applikasjonen vår kan man legge til nye elementer i form av forskjellige typer todos. Disse todo-elementene lagres ved hjelp av Redux, og det som ligger lagret i Redux ligger også lagret i AsyncStorage. Dette er nærmere forklart i Redux-tutorialen vår. Videre var det et krav om at man skulle utforske en teknologi som går utover vanlig React Native UI-problematikk, og her har vi valgt å utforske skritteller/pedometer-funksjonalitet gjennom Expo sitt API for dette. Dette kan du lese mer om senere i dette dokumentet.

Vi har tatt i bruk prettier.io for å opprettholde kodekvaliteten fordi Prettier formaterer koden når den committes. Da får vi en konsekvent og moderne formateringsmåte som flere andre bruker. Prettier er en kodeformatterer som støtter mange språk og som lett kan integreres med de fleste editorer. Kildekoden har vi prøvd å dele opp i små og enkle komponenter i et forsøk på å følge best-practice.

## Struktur - TODOaert

Under er en litt overordnet oversikt over hvordan appen vår er strukturert. Flere filer er utelatt. Vi har forsøkt å bruke best-practices i så stor grad som mulig, både angående komponentstrukturering samt i kodingen vår. Vi har lagt til kommentarer der vi mener det er nødvendig - altså ikke overalt, men der hvor det skjer noe bemerkelsesverdig.

```
├── App.js # Selve rotfilen til applikasjonen
├── assets # Mappe som inneholder filer som app-ikoner og lignende
├── components # Brøkdelen av komponentene våre
│   ├── Calendar # Komponenter relatert til kalenderen
│   │   ├── DayModal.js
│   │   ├── index.js
│   │   ├── MonthPicker.js
│   │   └── Tile.js
│   ├── Navigator # Filer relatert til tab-navigajone
│   │   ├── CalendarScreen.js
│   │   ├── index.js
│   │   ├── SettingsScreen.js
│   │   └── TaskScreen.js
│   ├── Settings # Filer relatert til innstillingene
│   │   ├── GoalToast.js
│   │   └── index.js
│   ├── Tasks # Filer relatert til task-listen
│   │   ├── index.js
│   │   ├── PedometerTodo.js
│   │   ├── Todo.js
│   │   └── TodoList.js
│   └── TodoAdder # Filer relatert til pluss-knappen for todos
│       ├── index.js
│       ├── SchemaModal.js
│       └── TodoSchema.js
├── features # Filer relatert til redux
│   ├── rootReducer.js
│   ├── settings
│   │   ├── actions.js
│   │   ├── reducers.js
│   └── todos
│       ├── actions.js
│       └── reducers.js
└── store.js # Konfigurasjon for Redux
```

## Testing

Jest er en test platform for Javascript og React applikasjoner som har som mål å oppnå null konfigurasjon i opplevelsen og bruken av den. Gjennom utviklingen av delfunksjonalitet og integrasjonen mellom disse gjennomførte vi alle kontinuerlig testing mens vi utviklet produktet. Etter hvert som vi fikk implementert komponenter og funksjonalitet, begynte vi etter hvert å etablere tester med Jest. I første omgang implementerte vi snapshot-tester som sjekket at det ikke ble uregelmessigheter i strukturen under kjøring. Snapshot testing innebærer at strukturen først blir omgjort til JSON og lagret som et snapshot ved første gjennomkjøring, og deretter sammenlignes JSON-representasjonen fra følgende kjøringer med denne lagrede representasjonen. Grunnet at man i React ofte har såkalte _pure_ komponenter som kun påvirkes gjennom props og ikke state, er snapshot-testing et kraftig verktøy. Likevel er snapshot-tester på ingen måte tilfredstillende testing alene og vi har derfor også prøvd å implementere mer detaljerte tester for mer funksjonalitetsrike deler av prosjektet.

## Git og Github

Vi har brukt Git og GitHub aktivt i utviklingen og forsøkt å følge gode og etablerte praksiser rundt bruk av Git. Vi har dekomponert utviklingen i tasks, og hver task er lagt inn som en issue på GitHub. Videre har vi tildelt hver issue som vi har gjort til en person på gruppen, slik at man får en oversikt over hvem som har gjort hva.

Oppgaven oppgir et krav om å markere commits med hviken issue de bidrar til. Vi har ikke markert hver individuelle commit med en issue, men vi mener dette kravet er tilfredsstilt gjennom at vi har gjennomført all utvikling i separate branches som er koblet opp mot issues gjennom navnet på branchen. Det finnes flere standarder, men vi har valgt å bruke standarden `feat-#1-description` der “feat” kategoriserer at dette er en _feature_, #1 gir tilknytningen til issue #1 og et oppsummerende ord som betegner hva branchen handler om. Dette fører til at hver PR linker til en issue, og issuen linker til pull requesten. Slik kan man fra alle ferdige issues se hvem som gjorde den, samt hvilken pull request den ble løst i. Dette var relativt utbredt praksis i programvareutvikling og i følge et spørsmål på dette fagets Piazza burde det være greit å gjøre det slik.

Vi har også prioritert issues ved hjelp av labels, slik at vi alltid har fokusert på det viktigste, likt slik man ofte vil prioritere brukerhistorier når man bruker Scrum. Det er et par issues igjen i prosjektet, men disse har veldig lav
prioritet. Derfor utgikk disse fordi det ikke er nødvendig å implementere alt av ikke-kritisk funksjonalitet i en prototype. Det er en bug blant de issuene som ligger igjen, men den er på grunn av en åpen issue i NativeBase, som vi ikke har noe med. Vi har linket til den i issuen.

Vi skulle som sagt utforske diverse teknologier i prosjektet vårt, og i den forbindelse har vi skrevet to tutorials, en om Expo sin Pedometer-funksjonalitet, og en om Redux.

### Pedometer

I dette prosjektet valgte vi å mål som telte antall skritt over en tidsperiode. Vi synes skritteller var et fornuftig valg som et motiverende fysisk mål, siden det da er enkelt å følge med på progresjon. Det er en aktivitet som kan gjøres hver dag med forskjellig vanskelighetsgrad avhengig av ønsket aktivitetsnivå. Vi ønsket å prøve ut noen nye teknologier innenfor skrittelling i forbindelse med utvikling av mobilapplikasjon.

Skrittelleren, ogs"kalt pedometeret, er implementert ved bruk av det innebygde pedometeret i `expo`. En fordel med expo pedometeret er at det er kompatibelt med både iOS og Android. På iOS vil pedometeret ta i bruk Core Motion, mens på Android vil skritt hentes med Google Fit. Når man skal ta i bruk pedometeret har det tre hovedfunksjoner:

`Pedometer.isAvailableAsync()`
Som sjekker om pedometeret kan bli aksessert.

`Pedometer.getStepCountAsync(start, end)`
Som gir deg antall skritt som er gått mellom to `new Date()`-objekter.

`Pedometer.watchStepCount(callback)`
Som kaller en funksjon “callback” nå der er gått et antall skritt. Dette gir live oppdatering av skritt.

Vi har implementert pedometer-todos-ene våre slik at todos med dato vil telle skritt på den dagen datoen er satt, mens todos uten dato vil telle fra de er opprettet og fram til dagen i dag. Dette var det vi syntes var mest intuitivt. Med dette håper vi at brukeren kunne bli motivert til å trene hver eneste dag. Det er i filen `PedometerTodo.js` pedometeret blir implementert. PedometerTodo er en wrapper til Todo som holder styr på alt angående pedometeret og skrittelling. Dette er for å gi klarhet i koden og hindre gjenbruk.

I `Pedometer.js` skjer et par ting. Når komponentet monteres vil vi kjøre `_subscribe` som kjører `watchStepCount` hvis todo-en skal oppdateres live. Da staten `currentStepCount` være lik antall skritt gått siden vi startet å subscribe på antall skritt.

Det andre viktige som skjer er at `updatePastSteps` blir kjørt når komponentet blir oppdatert og når det monteres. Denne funksjonen henter skritt gått på dagen todo-en spesifiserer eller fra opprettelses dag. PedometerTodo sender som denne informasjonen til en vanlig Todo, der logikk for visning av en todo ligger.

### Redux

I dette prosjektet har vi valgt å bruke Redux. Vi fikk lov til dette gitt at vi lagde en tutorial. Det er flere grunner til dette, men vi gjorde det primært fordi vi ønsket å lære mer om det i forkant av neste prosjekt, fordi det kunne gi koden vår en bedre struktur, og fordi Redux lar oss hente ut data i fra staten hvor vi trenger den - vi så for oss at en annen løsning kunne resultert i at vi måtte ha passet props nedover i treet veldig mye. Redux er nemlig en slags sentralisert plass å lagre applikasjonens data på. I tillegg gjør Redux det veldig enkelt å teste den state-relaterte koden.

Redux baserer seg på at man har en sentralisert store. Man kan sende såkalte actions ut i fra komponentene basert på for eksempel handlinger fra brukeren, og disse actionsene vil deretter bli håndtert i en såkalt reducer, som implementerer selve business-logikken. Dette er sannsynligvis best illustrert med et eksempel, så under følger en grunnleggende tutorial på hvordan man kan lage en ekstremt grunnleggende todo-applikasjon med hjelp av Redux.

Våre redux-relaterte filer ligger stort sett i `store.js` og i `features`-mappen. Det er her mesteparten av business-logikken vår er implementert i form av reducere.

Det første vi ønsker å gjøre er å lage et komponent som kan ta inn en liste med todo-elementer og viser disse. Merk at koden i denne tutorialen er meget minimal, det vil ikke kjøre av seg selv og man trenger mer boilerplate kode rundt det - formålet er å illustrere hvordan Redux fungerer.

```js
import React, { Component } from 'react';
import { View } from 'react-native';

/**
 * Component which accepts a list of todo objects and renders them.
 */
class TodoList extends Component {
  render() {
    return (
      <View>
        {this.props.todos.map(todo => (
          <View>{todo.text}</View>
        ))}
      </View>
    );
  }
}
```

Videre ønsker vi å gjøre det mulig å legge til todos. Det første vi gjør er å lage en funksjon som lager en såkalt action.

```js
export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
});
```

Videre vil vi lage en såkalt reducer. En reducer er en funksjon som tar inn en tidligere versjon av staten, og en action, og utfører denne actionen på staten. Her er enda en fordel med Redux - denne tilnærmingen gjør det blant annet enklere å forholde seg til hvordan endringer påvirker staten, samt en rekke andre fordeler.

```js
/**
 * Reducer which accepts the previus state and an action.
 * The default state is an empty list of todos.
 */
const todos = (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // Add the provided todo to the list of todos.
      return [...state, { text: action.text }];

    // The given action was not relevant to this reducer, so
    // return the previous state.
    default:
      return state;
  }
};

export default todos;
```

Litt senere kommer vi til å lage et slags container-component som lar brukeren legge til flere todos, og som viser listen med todos. Vi antar at dette komponentet heter `TodoManager`. Før vi implementerer dette komponentet, vil vi få på plass litt boilerplate kode som må til for at Redux skal kjøre. Vi lar derfor rot-komponentet til appen inneholde noe kode omtrent som det følgende.

```js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoManager from './TodoManager';
import todos from './reducers';

const store = createStore(todos);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoManager />
      </Provider>
    );
  }
}
```

Videre kan vi impementere komponentet som skal liste og legge til todos. Her kommer funksjonen `connect` fra `react-redux` inn i bildet. Det er en funksjon som lar oss koble et komponent til redux-storen vår. Vi importerer denne funksjone, og i tillegg importerer vi `addTodo` slik at vi kan sende ut `addTodo`-actions.

```js
import React, { Component } from 'react';
import { TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './TodoList';

class TodoManager extends Component {
  state = {
    text: '',
  };

  handleAdd = () => {
    this.props.addTodo(this.state.text);

    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <View>
        <TodoList todos={this.props.todos} />

        <View>
          <TextInput
            onChangeText={text => this.setState(text)}
            value={this.state.text}
          />

          <Button onPress={this.handleAdd} title="Add todo" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => {
    dispatch(addTodo(text));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoManager);
```

Her skjer mesteparten av magien i de siste par linjene, under selve komponentdefinisjonen. `mapStateToProps` er en funksjon som tar inn staten som ligger i redux, og som henter ut den informasjonen som er aktuell for komponentet. Det som returneres herifra, vil bli sendt inn som props til `TodoManager`. `mapDispatchToProps` tar inn en funksjon `dispatch` fra Redux. Denne funksjonen lar en sende actions ut som vil bli sendt til reducerene. `mapDispatchToProps` returnerer et objekt med en metode `addTodo`, som betyr at `TodoManager` vil få en funksjon `addTodo` sendt inn som en prop. Det er funksjonen `connect` som kobler komponentet til Redux.

Å bruke denne funksjonen, `addTodo`, i `TodoManager`, vil føre til at en `addTodo`-action vil bli sendt inn til reducerene. Når dette mottas av reducerene, vil følgelig redux-staten oppdateres, og redux vil sende den oppdaterte staten til komponentene, som deretter vil rerendres. Dette konkluderer med andre ord vår enkle todo-app.

#### Redux og AsyncStorage

Det var som sagt et krav om å bruke AsyncStorage for å la det som lagres i appen være persistent. Dette har vi gjort ved å synkronisere deler av redux-storen vår inn i AsyncStorage, noe som lett lar seg gjøre da hele storen i praksis er et JavaScript-objekt, og dermed kan serialiseres til en string. Mesteparten av denne logikken foregår i `store.js`. Her har vi en listener som venter på endringer i redux-storen, og hver gang en ny action kommer inn, lagrer vi staten med AsyncStorage. Under er snippeten i fra denne filen som gjør akkurat dette.

```js
const DATA_NAMESPACE = '@TodoApp:data';

const saveState = async state => {
  try {
    await AsyncStorage.setItem(DATA_NAMESPACE, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

// Listen for actions and save the state when a new action is retrieved.
store.subscribe(() => {
  // Fetch the state from Redux.
  const state = store.getState();
  // This function serializes the store data and saves it using AsyncStorage.
  saveState(state);
});
```

Måten vi henter data ut igjen på er litt mer komplisert, da vi ikke ønsker å hente absolutt all dataen ut i fra storen - for eksempel er det ikke ønskelig å hente tab-konfigurasjon og lignende ut. Måten vi har gjort det på er at vi har en funksjon `retrieveData` som kjører når appen startes. Denne henter ut den lagrede storen, parser JSON-dataen, og sender en action som vi har kalt `REHYDRATE` som inneholder denne parsede staten som payload. Dette betyr at i hver reducer, kan man vente på denne actionen `REHYDRATE` og deretter hente ut kun den dataen som er relevant for den reduceren.

```js
const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem(DATA_NAMESPACE);

    if (value !== null) {
      store.dispatch({
        type: 'REHYDRATE',
        state: JSON.parse(value),
      });
    }
  } catch (error) {
    console.error(error);
  }
};

retrieveData();
```

Måten dette brukes på i reducerene våre er ganske enkel. Under er et eksempel.

```js
case 'REHYDRATE':
  return [...action.state.todos, ...state];
```
