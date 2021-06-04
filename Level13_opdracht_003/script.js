// Deel 1 Objecten:
let person = {
    name: 'none',
    age: 9999,
    validations: [7, 10, 9]
};

console.log(person);

// dot-notation
person.name = "Jorik Klop";
person.age = 27;
console.log(person.name);
console.log(person.age);
console.log(person.validations);

// Bracket-notation
person["name"] = "Jorik Kloppenburg";
person["age"] = 26;
console.log(person.name);
console.log(person.validations);

// De waarde van de property "evaluations" is [ 7, 10, 9 ]

// Deel 2 Arrays:
// Vul deze array met minstens 3 verschillende kleuren, in de vorm van strings Bijvoorbeeld: "groen", "blauw", "rood".
let selectedColors = ["groen", "blauw", "rood"];

// Voeg een 4de element toe aan je array met de push method. array.push() Resultaat: ['groen, 'blauw, 'rood', 'geel']
// Voeg een cijfer toe aan je array met de push methode Resultaat: ['groen, 'blauw, 'rood', 'geel', 5]
// Voeg een object toe aan je array met de push methode. Het object ziet er zo uit: {greeting: "hi ik ben een object"} Resultaat: ['groen, 'blauw, 'rood', 'geel', 5, {greeting: "Hi ik ben een object"} ]
let newLength = selectedColors.push('geel', 5, "Hi ik ben een object");

// Log je nieuwe array naar de console.
console.log(selectedColors);

// Log de lengte van je array naar de console.
console.log(selectedColors.length);

// Log het eerste element van je array naar de console, dus in ons voorbeeld: "groen".
console.log(selectedColors[0]);

// Log het laatste element van je array naar de console, dus in ons voorbeeld: "rood". Ga ervan uit dat je niet weet hoeveel elementen er in de array gaan zitten. array[3] gaat dus niet de juist oplossing zijn als je straks 5 elementen in de array hebt.
// Log alleen de begroeting van het object (het laatste element), naar de console.
console.log(selectedColors[selectedColors.length - 1]);


// Deel 3: Bekijk een "real-life" object
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

// Stap 1: Log de naam van het laatste kattenras.
console.log("Naam laatste kattenras:", catBreeds[catBreeds.length - 1].name);

//Stap 2:Log de energy levels van de eerste kat.
console.log("Enery level van de eerste kat:", catBreeds[0].energy_level);

//Stap 3:Log het eerste temperament van de temperamenten van de tweede kat.
console.log("het eerste temperament van de temperamenten van de tweede kat:", catBreeds[1].temperament[0]);

//Stap 4:Log het laatst temperament van de temperamenten van de derde kat.
console.log("laatst temperament van de temperamenten van de derde kat", catBreeds[2].temperament[4]);

//Stap 5:Log het favoriete voedsel van de derde kat
console.log("het favoriete voedsel van de derde kat:", catBreeds[2].food.favourite_food);