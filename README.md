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

I dette prosjektet har vi valgt å bruke Redux. Det er flere grunner til dette, men vi gjorde det primært fordi vi ønsket å lære mer om det i forkant av neste prosjekt, fordi det kunne gi koden vår en litt bedre struktur, og fordi Redux lar oss hente ut data i fra staten hvor vi trenger den - vi så for oss at en annen løsning kunne resultert i at vi måtte ha passet props nedover i treet veldig mye. Redux er nemlig en sentralisert plass å lagre applikasjonens data på. Redux baserer seg på at man har en sentralisert store. Man kan sende såkalte actions ut i fra komponentene basert på for eksempel handlinger fra brukeren, og disse actionsene vil deretter bli håndtert i en såkalt reducer, som implementerer selve business-logikken. Dette er sannsynligvis best illustrert med et eksempel, så under følger en grunnleggende tutorial på hvordan man kan lage en ekstremt grunnleggende todo-applikasjon med hjelp av Redux.

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

Måten vi henter data ut igjen på er litt mer komplisert, da vi ikke ønsker å hente absolutt all dataen ut i fra storen - for eksempel er det ikke ønskelig å hente tab-konfigurasjon og lignende ut. Vi har

```js
```

# Personal Information and Motivation Manager

I dette prosjektet var oppgaven å lage en såkalt Personal Information and Motivation manager. Vi har valgt å lage en applikasjon som er basert rundt todos, og applikasjonen vår er i praksis en integrert todo-liste og kalender.

## :warning: Oppstart

Dette prosjektet er satt opp med Expo, så i utgangspunktet trenger man kun kjøre `npm install -g expo-cli` og `expo start` for å starte opp prosjektet. _I tillegg har vi innført en konfigurasjonsfil, `config.js`, hvor man kan skru av og på pedometer-todos. Denne er innført fordi man kan få problemer med pedometer-todos og live reloading. Gjerne sjekk at variabelen i denne fila er satt itl `true` før du forsøker å teste pedometer-todos._

## Innhold og funksjonalitet

Applikasjonen er en prototype på et produkt, og et endelig produkt vil inkludere flere features, samt et mer raffinert design - ideelt sett burde vi bruke brukersentrerte metoder for å forbedre designet vårt basert på feedback. For å avgrense målene våre, har vi valgt å holde oss til funksjonaliteten beskrevet ovenfor. Meningen med oppgaven er å demonstrere teknologibruk. Resultatet av dette prosjektet er altså et minimum viable product på en applikasjon hvor brukeren kan legge til todos og få disse vist i en kalender eller en liste. Dette er altså en form for mål for intellektuell aktivitet som brukeren kan registrere. Todos kan ha en valgfri dato og en valgfri utdypende beskrivelse. I tillegg kan man lage en såkalt pedometer-todo, som er en spesiell type todo som beskriver et mål om å gå et bestemt antall skritt i løpet av en spesifisert dato. Dette er altså et mål for fysisk aktivitet som brukeren kan registerere. Hvis man ikke spesifiserer noen dato, teller skrittene fra opprettelsesdatoen. Det er flere edge cases her, som for eksempel hva som burde skje hvis man har flere todos på samme dag. Disse vil for øyeblikket telle samtidig, men andre løsninger inkluderer å forby flere pedometer-todos på en dag, eller å telle en og en. Dette er slik funksjonalitet som vi, om dette hadde vært et reelt prosjekt, hadde forsøkt å teste på faktiske potensielle brukere, jfr. teknikker fra MMI-faget.

Brukeren kan registrere en slags meta-mål i form av antallet todos som brukeren ønsker å oppnå i løpet av en dag, noe vi håper vil bidra til at brukeren blir mer motivert. Hvis brukeren når dette meta-målet, får brukeren en gratulerende melding i form av en toast-melding. Kalenderen fargekodes også basert på hvor mange todos man oppnår, og vi håper at dette motiverer brukeren til å jobbe med sine oppsatte oppgave kontinuerlig. Fargekoden er basert blant annet på målet for daglig antall todos som brukeren velger i settings, så vi håper dete også kan motivere brukeren til å gjøre en ønsket mengde todos hver dag, i tillegg til å opprettholde todo-streken for å unngå gap i kalenderen.

## Teknologi

Applikasjonen bruker React Native og er satt opp ved hjelp av Expo. Vi har også forsøkt å velge hensiktsmessige tredjepartsbiblioteker for å hjelpe oss med utviklingen. Et av de største bibiotekene vi har valgt å bruke er NativeBase, som er en samling UI-komponentet for React Native, som fungerer på både iOS og Android. Dette har latt oss spare mye tid med designet av applikasjonen, da vi har kunnet forholde oss til ferdiglagde komponenter for knapper og lignende i stedet for å implementere de selv, som i tillegg ser innebygde ut. I tillegg har vi eksterne komponenter for dato-velgere, tall-input og progresjonsbarer. Vi bruker også biblioteket Swipeout for å håndtere swiping av todos i de forskjellige todo-listene. En oversikt over alle prosjektets avhengigheter vil man naturlig nok finne i `package.json`.

I applikasjonen vår kan man legge til nye elementer i form av forskjellige typer todos. Disse todo-elementene lagres ved hjelp av Redux, og det som ligger lagret i Redux ligger også lagret i AsyncStorage. Dette kan du lese mer om senere i dette dokumentet, i Redux-tutorialen vår. Videre var det et krav om at man skulle utforske en teknologi som går utover vanlig React Native UI-problematikk, og her har vi vaglt å utforske pedometer-funksjonalitet gjennom Expo sitt API.

- Fortelle litt om testing, hvorfor appen er plattformuavhengig og fungerer på ios/android
- Fortelle masse om Jest!

Vi har brukt Git og GitHub aktivt i utviklingen og forsøkt å følge gode og etablerte praksiser rundt bruk av Git. Vi har dekomponert utviklingen i tasks, og hver task er lagt inn som en issue på GitHub. Videre har vi assignet hver issue som vi har gjort til en person på gruppen, slik at man får en oversikt over hvem som har gjort hva.

Oppgaven oppgir et krav om å markere commits med hviken issue de bidrar til. Vi har ikke markert hver individuelle commit med en issue, men vi mener dette kravet er tilfredsstilt gjennom at vi har gjennomført all utvikling i separate branches, som er koblet opp mot issues gjennom navnet på branchen. Dette fører til at hver PR linker til en issue, og issuen linker til pull requesten, slik at man i fra alle gjorte issues kan se hvem som gjorde den, samt hvilken pull request den ble løst i. Dette var relativt utbredt praksis i programvareutvikling, og i følge et spørsmål på dette fagets Piazza burde det være greit å gjøre det slik.

All utviklingen i dette prosjektet foregikk på GitHub. Vi har forsøkt å dekomponere utviklinger i tasks som ligger lagret som issues. Oppgaven lister et krav om å markere commits med hvilken issue de bidrar til. Vi har ikke gjort dette ved å eksplisitt markere issuene i hver eneste commitmelding da dette ikke virker som en veldig utbredt praksis. Det vi derimot har gjort er å gjøre all utvikling i separate branches som følger et navngivingssystem hvor branchen er koblet opp mot en issue. For eksempel er alle endringer tilknyttet dette dokumentet gjort i branchen feat-#13-readme og dermed koblet opp i mot issue 13, som handler om å legge til dokumentasjon. Dette var også akseptabel praksis i faget programvareutvikling.

plattformuavhengig: fungerer på både ios og android
dekomponere i tasks, issues, markere commits, assigner folk
oversikt over filer
oversikt over komponenter som er brukt
noe om utforsnkning

### Pedometer

### Redux

I dette prosjektet har vi valgt å bruke Redux. Det er flere grunner til dette, men vi gjorde det primært fordi vi ønsket å lære mer om det i forkant av neste prosjekt, fordi det kunne gi koden vår en litt bedre struktur, og fordi Redux lar oss hente ut data i fra staten hvor vi trenger den - vi så for oss at en annen løsning kunne resultert i at vi måtte ha passet props nedover i treet veldig mye. Redux er nemlig en sentralisert plass å lagre applikasjonens data på. Redux baserer seg på at man har en sentralisert store. Man kan sende såkalte actions ut i fra komponentene basert på for eksempel handlinger fra brukeren, og disse actionsene vil deretter bli håndtert i en såkalt reducer, som implementerer selve business-logikken. Dette er sannsynligvis best illustrert med et eksempel, så under følger en grunnleggende tutorial på hvordan man kan lage en ekstremt grunnleggende todo-applikasjon med hjelp av Redux.

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

rect, react native, tredjeparts komponetner, bibliotekre og api, persistent data, git, gruppearbeid, fordeling,
