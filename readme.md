# Teknisk dokumentation - Easy Peacy (Tema 8 - Gruppe 10)

## Om projektet

Dette projekt er lavet i anden del af tema 8. Vi har lavet et dynamisk website med HTML, CSS og JavaScript, hvor indholdet bliver hentet fra en opskrift API.

Sitet består af flere sider, hvor brugeren kan:

- Se forskellige informationer på forsiden
- Se en liste med opskrifter
- Klikke sig videre til en detaljeside
- Bruge filtrering
- udfylde en formular
- Logge ind/blive medlem

## Links

- [GitHub repository](https://github.com/Vicky8484/easypeacy)
- [GitHub Pages](https://vicky8484.github.io/easypeacy/index.html)
- [Figma](https://www.figma.com/design/IyaF01suc8vecBsvmi5yIg/Tema-8---Gruppe-10?node-id=230-2&t=pbkgWspIarWMfgXh-1)
- [Trello](https://trello.com/b/H7PQK9IQ/tema-8-gruppe-10)

## Projektstruktur:

Projektet er opdelt i HTML, CSS og JavaScript-filer

easypeacy/
├── index.html
├── opskrifter.html
├── enkeltopskrift.html
├── forms.html
├── helloeasy.html
├── css/
│ └── global.css
│ └── index.css
│ └── opskrifter.css
│ └── enkeltopskrift.css
│ └── forms.css
│ └── helloeasy.css
├── js/
│ ├── menu.js
│ ├── kategorier.js
│ ├── opskrifter.js
│ ├── enkeltopskrift.js
│ └── slideshow.js
└── readme.md

### Filbeskrivelser

- index.html – forside med informationer
- opskrifter.html – viser en liste med data fra API'et
- enkeltopskrift.html – viser detaljer om en valgt opskrift
- forms.html – indeholder formular til at indsende opskrift
- global.css – styrer globale elementer som header, footer og knapper
- JavaScript-filer – styrer det dynamiske indhold på de forskellige sider

## Hvordan koden fungerer

Vi har opdelt JavaScript, så hver side har sin egen fil.

### menu.js

Bruges globalt på alle sider og gør menu-navigationen responsiv

### slideshow.js

Bruges på forsiden, så hero-sektionen kører som et slideshow

### kategorier.js

Bruges på forsiden i kategorier-sektionen, så kategorierne fører til opskriftlisten for den kategori

### opskrifter.js

Henter data fra Rest API'et og viser en liste med opskrifter på siden.

**Flow:**

- Siden loader
- JavaScript kører
- Data hentes fra Rest API
- Data bliver gennemgået med loop
- HTML bliver indsat i DOM'en
- Brugeren kan klikke på en opskrift

### enkeltopskrift.js

Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter den rigtige opskrift fra Rest API'et.

Det gør det muligt at genbruge den samme HTML-side til mange opskrifter. I stedet for at lave én side per opskrift, bruger vi ét id i URL'en til at vise det rigtige indhold.

### forms.js

Styrer formularen og validering af inputfelter.

Denne fil bruges til at sikre, at brugeren udfylder formularen korrekt. Det gør formularen mere brugervenlig og mindsker fejl.

## Navngivning:

Vi har prøvet at navngive vores filer, variabler og funktioner så tydeligt som muligt.

### Eksempler på variabler

`const recipeURL;
const recipeContainer;
const selectedCategory;`

### Eksempler på funktioner

`
getRecipes();
showRecipes();
filterByPrep();
filterByCook();`

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

## Link til scripts:

- Vi placerer script tags i head med defer attribute

## Git branches:

- Vi navngiver branches med hvad vi laver (hvilken funktion eller side der skal kodes i den branch) efterfulgt af navn på gruppemedlem

## Kommentarer i koden

Vi har kommenteret meget i det globale.css, så det er helt tydeligt hvad der er hvad for alle

Eksempel:

```
/************ menu + burger menu **********/
header {
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 70px;
  background-color: #b22000;
}
```

I vores individuelle css-filer har vi valgt at overlade det til det medlem som er ansvarlig for siden, hvor meget personen vil kommentere.

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

Et objekt kan fx se sådan ud:

```
{
"id": 1,
"name": "Classic Margherita Pizza",
"ingredients": [
"Pizza dough",
"Tomato sauce",
"Fresh mozzarella cheese",
"Fresh basil leaves",
"Olive oil",
"Salt and pepper to taste"
],
"instructions": [
"Preheat the oven to 475°F (245°C).",
"Roll out the pizza dough and spread tomato sauce evenly.",
"Top with slices of fresh mozzarella and fresh basil leaves.",
"Drizzle with olive oil and season with salt and pepper.",
"Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
"Slice and serve hot."
],
"prepTimeMinutes": 20,
"cookTimeMinutes": 15,
"servings": 4,
"difficulty": "Easy",
"cuisine": "Italian",
"caloriesPerServing": 300,
"tags": [
"Pizza",
"Italian"
],
"userId": 166,
"image": "https://cdn.dummyjson.com/recipe-images/1.webp",
"rating": 4.6,
"reviewCount": 98,
"mealType": [
"Dinner"
]
}
```

**Felter vi bruger:**

- id – bruges til at sende brugeren videre til detaljesiden
- name – opskriftsnavn
- ingredients – ingredientser
- instructions – instruktioner/fremgangsmåde
- prepTimeMinutes – tilberedningstid i minutter
- cookTimeMinutes - kogetid i minutter
- servings – antal portioner
- cuisine - madens oprindelse
- caloriesPerServing - hvor mange kalorier der er
- tags - tags
- rating - bedømmelser
- image – opskriftsbillede

## Formular og validering

Vi har lavet en formular, hvor brugeren kan indtaste oplysninger.

HTML-validering:

- required – feltet skal udfyldes
- type="email" – validerer email-format
- type="number" – accepterer kun tal
- Det sikrer, at brugeren ikke kan sende formularen, hvis felterne ikke er udfyldt korrekt.

## Arbejdsflow

Vores arbejdsfordeling:

- Victory
  - index.html
  - global.css/index.css
  - menu.js/kategorier.js/slideshow.js
  - header+footer

- Victor
  - opskrifter.html
  - opskrifter.css
  - opskrifter.js

- Laura
  - enkeltopskrift.html
  - enkeltopskrift.css
  - enkeltopskrift.js

- Marie
  - forms.html
  - helloeasy.html
  - forms.js

Vores workflow:

- Lav en branch med feature-navn og eget navn til sidst
- Kod en feature
- Commit ændringer
- Push til GitHub
- Merge til main når det virker

Det gjorde det nemmere at holde styr på, hvem der lavede hvad.

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet ved at holde løsningen forholdsvis enkel.

**Tiltag:**

- Bruge få og lette filer
- Undgå tunge frameworks
- Genbruge kode (global.css)
- Optimere billeder og indhold (squoosh til webp)
- Giv video "controls" attribut i stedet for "autoplay"

Et lettere website kræver færre ressourcer at loade og bruge.

## Udfordringer undervejs

Skriv om udfordringer på mandag/tirsdag?

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Skriv noget

# Funktionalitet

Hvad vi konkret arbejder med for at udvikle websitet ift. interaktioner brugeren kan foretage på sitet:

- Hentning af opskrifter fra API.
- Filtrering af opskrifter baseret på brugerens valg.
- Dynamisk visning af opskrifter i HTML.
- Navigation til opskrift formular
- Navigation til andre HTML-sider
- Hentning af informationer om enkelte opskrifter

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (https://dummyjson.com/products)
- (https://dummyjson.com/recipes?limit=100)
- (https://dummyjson.com/recipes/) + id

## Gruppemedlemmer

- Laura Buschardt
- Marie Rosenqvist
- Victor Happe
- Victory Okosun

```

```
