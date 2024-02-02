/*

// (1) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
*/
/*

        // {b}
        Add a new age to the array
        //ages.push(32); 

    // {a}
            Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            Do not use numbers to reference the last element, find it programmatically.
            ages[7] - ages[0] is not allowed!

    // Find the last element index programmatically
        let lastIndex = ages.length - 1;

    // Subtract the value of the first element from the value of the last element
    let result = ages[lastIndex] - ages[0];

    console.log(result); */

/*
// {c}
    Use a loop to iterate through the array and calculate the average age.

// Calculate the sum of ages
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

// Calculate the average age
let average = sum / ages.length;

console.log(average);*/




/*
//(2) 
    Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

    // {A}
    Use a loop to iterate through the array and calculate the average number of letters per name.


    // Calculate the total number of letters
    let totalLetters = 0;
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length;
    }

    // Calculate the average number of letters per name
    let averageLetters = totalLetters / names.length;

    console.log(averageLetters);

        //{B}
        Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.


        // Concatenate all the names together, separated by spaces
        let concatenatedNames = '';
        for (let i = 0; i < names.length; i++) {
            concatenatedNames += names[i] + ' ';
        }

        console.log(concatenatedNames.trim());
*/




/*
// (3)
    How do you access the last element of any array?

let array = [1, 2, 3, 4, 5];

// Access the last element using length property
let lastElement = array[array.length - 1];

console.log(lastElement); // Output: 5
*/




/*
//(4)
    How do you access the first element of any array?

let array = [1, 2, 3, 4, 5];

// Access the first element using index 0
let firstElement = array[0];

console.log(firstElement); // Output: 1
*/




/*
// (5)
Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.


let names = ['Kelly', 'Sam', 'Kate'];
let nameLengths = [];

// Iterate over the names array and add the length of each name to nameLengths
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths);  // Output: [5, 3, 4]
*/




/*
//(6)
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.


let nameLengths = [5, 3, 4];
let sum = 0;

// Iterate over the nameLengths array and calculate the sum
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log(sum); // Output: 12
*/




/*
//(7) 
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


function repeatWord(word, n) {
    return word.repeat(n);
}


let result = repeatWord('Hello', 3);
console.log(result);  // Output: 'HelloHelloHello'
*/




/*
// (8)
Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}


let fullName = getFullName('Eduardo', 'Oros');
console.log(fullName);  // Output: 'Eduardo Oros'
*/




/*
// (9)
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


function isSumGreaterThan100(numbers) {
    // Calculate the sum of numbers using reduce
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    // Check if the sum is greater than 100
    return sum > 100;
}


let numbersArray = [30, 40, 35];
let result = isSumGreaterThan100(numbersArray);
console.log(result);  // Output: true
*/



/*
// (10)
Write a function that takes an array of numbers and returns the average of all the elements in the array.


function calculateAverage(numbers) {
    // Check if the array is not empty
    if (numbers.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    // Calculate the sum of numbers using reduce
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    // Calculate the average
    let average = sum / numbers.length;

    return average;
}

let numbersArray = [10, 20, 30, 40, 50];
let result = calculateAverage(numbersArray);
console.log(result);  // Output: 30
*/


/*
// (11)
Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


function isAverageGreaterThan(arr1, arr2) {
    // Calculate the average of the elements in the first array
    let averageArr1 = arr1.length > 0 ? arr1.reduce((acc, num) => acc + num, 0) / arr1.length : 0;

    // Calculate the average of the elements in the second array
    let averageArr2 = arr2.length > 0 ? arr2.reduce((acc, num) => acc + num, 0) / arr2.length : 0;

    // Compare the averages
    return averageArr1 > averageArr2;
}


let array1 = [10, 20, 30, 40, 50];
let array2 = [5, 15, 25, 35, 45];
let result = isAverageGreaterThan(array1, array2);
console.log(result);  // Output: true
*/



/* 
// (12)
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

let isHotDay = true;
let moneyAvailable = 15.75;
let result = willBuyDrink(isHotDay, moneyAvailable);
console.log(result);  // Output: true

*/



/*
// (13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function isEven(number) {
    return number % 2 === 0; // (%) is used to check if the number is divisible by 2.
    //If the remainder is 0, the number is even; otherwise, it's odd.
}

let inputNumber = 8;
let result = isEven(inputNumber);
console.log(result);  // Output: true


*/
