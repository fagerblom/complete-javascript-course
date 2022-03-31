/*
Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:

§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

//
//How to think like a developer
/*
Make sure that you've understood the problem
Divide and conquer. Break a big problem into smaller problems
Research > don't be afraid of doing it
Psuedo code > good for bigger problems
*/

//PROBLEM >
// 1) Understandning the problem
// 2) Breaking up into sub-problems

//Have a therometer const
//Have a printForecast function
//run through the whole array in for loop and get indexes
// - take the >>index of array object<< and prints to console

const thermometer1 = [17, 21, 23];
const thermometer2 = [12, 5, -5, 0, 4];

// const printForecastTest = (thermometerArray) => {};

function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}ºC in ${arr.indexOf(arr[i]) + 1} days`);
  }
}

printForecast(thermometer1);
printForecast(thermometer2);

//omg I made it ❤
