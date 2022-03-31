'use strict'; //to activate strict mode


//functions
function describeCountry(country, population, capitalCity) {
    const describeCountryString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return describeCountryString;
}

const sweden = describeCountry(`Sweden`, 10, `Stockholm`);
console.log(sweden);
const unitedKingdom = describeCountry(`United Kingdom`, 62, `London`);
console.log(unitedKingdom)


//FUNCTIONS
//function declarations vs expressions
//declaration
function percentageOfWorld1(population) { //declaration creates function in the global scope, acccessible.
    return (population/7900)*100;
}

const chinaPopulation = percentageOfWorld1(1441);
const indiaPopulation = percentageOfWorld1(1380);
console.log(chinaPopulation, indiaPopulation);

//expression
const percentageOfWorld2 = function (population) { //expression keeps clean syntax but limited accessibility in scope. 
    return (population/7900)*100;
}

console.log(percentageOfWorld2(1441), percentageOfWorld2(1380))


//arrow function
const percentageOfWorld3 = population => (population/7900)*100; //const name = function name, population = parameter
const swedenPopulation = percentageOfWorld3(10)
console.log(swedenPopulation)


//functions calling other functions
function describePopulation(country, population) {
    const percent = percentageOfWorld1(population);

    const string = `${country} has ${population} million people, which is about ${percent} of the world.`
    return string
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('India', 1380));





//ARRAYS

//introduction to arrays
const populations = [1441, 1380, 10, 83]; //population of China, India, Sweden and Germany
console.log(populations.length === 4); //check if array has 4 objects

const percentages = [percentageOfWorld1(1441), percentageOfWorld1(1380), percentageOfWorld1(10), percentageOfWorld1(83)]; //using function in array
console.log(percentages);

//basic array operations
const neighbours = ['Denmark', 'Norway', 'Finland'];
neighbours.push('Utopia'); //.push() adds to end of array //.unshift() adds to beginning of array                         
console.log(neighbours);

neighbours.pop(); //.pop() removes from end of array //.shift() removes from beginning of arrat            
console.log(neighbours);

if(neighbours.includes('Germany')) {
    console.log(`Cool, Germany is you neighbour`)
} else {
    console.log(`Probably not a central European country :D`)
}

neighbours[neighbours.indexOf('Denmark')] = 'Kingdom of Denmark' //.indexOf finds targeted index element
console.log(neighbours)





//OBJECTS

/* SYNTAX
objectName.property 
objectName["property"]
objectName[expression]
*/

//Introduction to objects
const myCountry = {
    country: 'Sweden',
    capital: 'Stockholm',
    lanuage: 'swedish',
    population: '10 million',
    neighbours: ['Norway', 'Denmark', 'Finland']
}

//Dot VS Bracket Notation

/*'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation.*/
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.lanuage}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

//Challange write sentence 
//Jonas has 3 friends, and his best friend is Michael

const thisYear = 2022

const nora = { //nora is an object
    firstName: "Nora", //the following before : are all properties
    lastName: "Fagerblom",
    friends: ["Josefin", "Kelly", "Kalle"],
    driversLicense: true,
    occupation: 'student',
    birthYear: 1995,
    calcAge: function(){
        this.age = thisYear - this.birthYear;
        return this.age 
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.occupation} and has ${this.driversLicense ? `a` : `no`} driver's license`
    }
};
nora.calcAge();
console.log(nora.getSummary());

console.log(`${nora.firstName} has ${nora.friends.length} friends, and her best friend is ${nora.friends[0]}`)

//Challange write sentence
//Jonas is a 43 year old teacher, and has a driver's license 
console.log(nora.getSummary());

console.log(`${nora.firstName} is a ${nora.age} year old ${nora.occupation}, and ${nora.driversLicense ? `has a driver's license` : `don't have a driver's license`}`);





//FOR LOOP
//  start      condition    updating
for(let vote = 1; vote <= 50; vote++){ //have to be let (not const) to be able to change from 1-50
    console.log(`Voter number ${vote} is currently voting`)
}

//
const percentages2 = []; //creating empty array
//  declare i in start
for (let i = 0; i < populations.length; i++){
    percentages2.push(percentageOfWorld1(populations[i])); //push in index of populations length into precentages2 array //and calc with function
}
console.log(percentages2)//console logs calculation of population value with percentageOfWorld function

/* other solution not mine
const populations = [10, 1441, 332, 83];
const percentages2 = [];
    for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
     percentages2.push(perc);
    }
console.log(percentages2);
*/

//looping array in array
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++){
    const neighboursArray = (listOfNeighbours[i]);//looping the array to store the second array to list in a varible

    for(let i = 0; i < neighboursArray.length; i++){
        console.log(`Neighbour: ${neighboursArray[i]}`)//going in to the second array and listing them, the index:)
    }
}

//WHILE LOOP
const percentages3 = [];
let i = 0; //declare i!!

while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]); //store the calculations of function in varible
    percentages3.push(perc); //push perc into percentages3[]
    i++; //do this over and over 
}

console.log(percentages3);