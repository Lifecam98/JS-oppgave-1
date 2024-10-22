/******************************************************************************

WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!



All the assignment instructions are commented out so that you can write your 

code in between them. Remember to read the instructions CAREFULLY, write short 

comments for your code, and feel free to ask for help if you're stuck.



GOOD LUCK!

******************************************************************************/

/******************************************************************************

ASSIGNMENT 1



Your first task will be to link this javascript file to the index.html file

using one of the methods I showed in the first lecture.



<-- Locate the index.html file in the file browser and link it to this file, 

javascript.js

******************************************************************************/
/* Script tag added in index.html */
/****************************************************************************** 

ASSIGNMENT 2


Last lecture I showed you how to make variables that can hold values of the 

various data types. Make some variables of the following datatypes: 

String, number, boolean, array

You can choose what the actual content is.

Try to use both the let and const keywords

******************************************************************************/

// String
const firstName = "Marius";
const lastName = "Tysnes";
console.log(firstName, lastName); // Output: Marius Tysnes

// Number
let age = 27;
console.log(age); // Output: 27

// Boolean
const isMale = true;
console.log(isMale); // Output: true

// Array
let pets = ["cat", "dog", "fish", "hamster"];
console.log(pets); // Output: ["cat", "dog", "fish", "hamster"]

/****************************************************************************** 

ASSIGNMENT 3



Try out a few of the operators we looked at (+, -, /, *)

as well as a few of the shorthand operators (++, --, +=, -=)

******************************************************************************/

let num1 = 5;
let num2 = 10;

// Addition
console.log(num1 + num2); // Output: 15

// Subtraction
console.log(num2 - num1); // Output: 5

// Multiplication
console.log(num1 * num2); // Output: 50

// Division
console.log(num2 / num1); // Output: 2

// Shorthand increment
num1++;
console.log(num1); // Output: 6

// Shorthand decrement
num2--;
console.log(num2); // Output: 9

// Shorthand Addition
num1 += 5;
console.log(num1); // Output: 11

// Shorthand Subtraction
num2 -= 5;
console.log(num2); // Output: 4

/****************************************************************************** 

ASSIGNMENT 4



Write an IF/ELSE conditional statement that checks that userName isn't 

empty(""), that the user age is 18+, and that userIsBlocked is false. 



(HINT: Use the && (logical AND) to check all 3 in one IF statement)



If all of these conditions are true, change the userIsLoggedIn variable to true 

and the goToPage variable to "/home" then console.log a welcome message. 



If any of the conditions for logging in are not met, console.log an error 

message.



Try changing the values of the variables to make sure your IF/ELSE conditional

can handle all cases correctly 

******************************************************************************/

let userName = "";

let userAge = 18;

let userIsLoggedIn = false;

let userIsBlocked = false;

let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
	userIsLoggedIn = true;
	goToPage = "/home";
	console.log("Welcome online ", userName, "!");
	console.log(`Welcome online ${userName}!`); //Det samme som linjen over men med template literals
} else {
	console.log(
		userName,
		", you were not let into the page, ",
		"because you are not old enough, blocked, or your name is invalid."
	);
}

/******************************************************************************

ASSIGNMENT 5



Make a variable called userTitle and set the content equal to "Mr." if userMale 

is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 

this:



const variable = statement ? "this if true" : "this if not true"



Try changing userMale to both true and false and console.log your new variable,

to see that your conditional is working.

******************************************************************************/

const userMale = false;
const userTitle = userMale ? "Mr." : "Mrs.";

// if true
console.log("Hello ", userTitle); // Output: "Hello Mr."

// if false
console.log(`Hello ${userTitle}`); // Output: "Hello Mrs."
