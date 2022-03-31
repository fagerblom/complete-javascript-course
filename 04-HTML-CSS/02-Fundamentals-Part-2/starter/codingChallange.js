/*
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores 
*/

const calcAverage = (a, b, c) => (a + b + c)/3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKaolas) {
    if (avgDolphins >= 2 * avgKaolas){
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKaolas})`)
    } else if (avgKaolas >= 2 * avgDolphins){
        console.log(`Dolphins wins (${avgKaolas} vs. ${avgDolphins})`)
    } else {
        console.log(`There is no winner:(`)
    }
};

checkWinner(scoreDolphins, scoreKoalas);




/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array)
*/


const bills = [125, 555, 44]

// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300){
//         console.log(`The bills is ${bill}, the tip is ${bill*0.15} which is 15% and the total price is ${bill + (bill*0.15)}`)
//     } else {
//         console.log(`The bills is ${bill}, the tip is ${bill*0.20} which is 20% and the total price is ${bill + (bill*0.20)}`) 
//     };
// };

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.2;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(bills, tips, totals)






/*
Coding Challange 3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
*/

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function() { //method (function expression within an object)
        this.bmi = this.weight / (this.height**2) //this. adds to the array >> . adds to the array
        return this.bmi //return the added property bmi
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.weight / (this.height**2)
        return this.bmi
    }
}
john.calcBMI(); //call the functions
mark.calcBMI();

if (john.bmi > mark.bmi){ //when fucntion 
    console.log(`John's BMI (${john.bmi}) is heigher than Mark's (${mark.bmi})!`)
} else {
    console.log(`Mark's BMI (${mark.bmi}) is heigher than John's (${john.bmi})!`)
}







/*
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays
*/

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++){
    const tipsCalc = calcTip(bills2[i]);
    tips2.push(tipsCalc);
    totals2.push(tipsCalc + bills2[i]);
}

console.log(`The tips are ${tips2}`);
console.log(`The totals are ${totals2}`);


/*
Bonus:

4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

let sum = 0;

function calcSum(array) {
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

const averageCost = calcSum(totals2)/bills2.length

console.log(sum, averageCost);

