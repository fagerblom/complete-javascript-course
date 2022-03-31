//let const var
//varibles
const country = "Sweden";
const continent = "Europe";
let population = 10;

console.log(country + continent + population + " mil");

//datatypes 
const isIsland = false;
const language = "swedish";
console.log(isIsland + population + " mil" + country + language);

//operators
let halfPopulation;
halfPopulation = (population/2 + " mil");
console.log(halfPopulation);

population++; //increase population by 1
console.log(population);

let finlandPopulation = 6;
console.log(population > finlandPopulation); //is population greater than finland, boolean answer (true)

let averageCountryPopulation = 33;
console.log(population < averageCountryPopulation); //is popuation less than average population

let description = (country + " is in " + continent + ", and it's " + (population - 1) + " millon people speak " + language);
console.log(description);

//string template literal
description = (`${country} is in ${continent} and it's ${population -1} million people speak ${language}`); 
console.log(description);

// if / else
if ((population - 1) > 33) {
    console.log(`Swedens's population is above average`);
} else {
    console.log(`Swedens's population is below average`);
}



//type conversion & coersion 
//conversion = manually
//coersion = automatically by js

/*
'9' - '5';                      = 9-5               = 4
'19' - '13' + '17';             = (19-13) + '17'    = '617'
'19' - '13' + 17;               = 19 - 13 - 17      = 23
'123' < 57;                     = 123 < 57          = false 
5 + 6 + '4' + 9 - 4 - 2;        = 11 + '4' + 3      = 1143
*/

//conversion example
const conversionExample = Number("23"); //string you want to convert to number Number("string")
console.log(typeof conversionExample, conversionExample);

//coersion examples
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);



//truty and falsy values
/*
values when converted to blooleans (automatically in if/else statements)

5 falsy values = 0, "", undefined, NaN (non readable number)
 */



//equality operator

//COMMENTED OUT CODE, uncomment to get promt etc!
/*const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));

if (numNeighbours === 1) {
    console.log(`Only one border!`);
} else if (numNeighbours > 1){
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}*/



//logical operators
if (language === `english` && population < (50 - 1) && !isIsland ) { //wants to live in a country where you speak english, have a population less than 50 mil and is not an island
    console.log(`You should live in Sweden:-)`)
} else {
    console.log(`Sweden does not meet you criteria:-(`)
}



//the switch statement

switch(language) { //switch followed by param
    case "mandarin": //param will be compared to case
    case "chinese": //can be several cases to one console.log
        console.log("MOST number of native speakers!") //if true then execute this before break
        console.log("antoher console.log") //There can be severeal things before the break:-)
        break; //break to finnish case
    case "spanish":
        console.log("2nd place in number of native speakers")
        break;
    case "english":
        console.log("3rd place")
        break;
    case "hindi":
        console.log("Nunmber 4")
        break;
    case "arabic":
        console.log("5th most spoken language")
        break;
    default:
        console.log("That's a great lanuage too:-)")
}




//conditional (ternary) operator
population - 1 > 33 ? `Swedens population is above average` : `Swedens population is below average`; //compact if/else operator

//starting with an condition (>), followed by an if (?), followed by an else (:)

