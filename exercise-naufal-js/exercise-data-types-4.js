/**
- After each step, run the code to make sure your code still works! 

- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
  
- Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  ===== Step 1: =====
  Look at the code below and make a prediction of what the output will be. 
  
  After making your prediction, press 'Run' at the top and look at the output in the console. If you were surprised by anything, go back and look at the code to see what's going on.

*/

// code to be deleted
const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

console.log(greeting);

/*

  ===== Step 2: =====
  Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works
	
  ---------------------------------------------------------------

  ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1947
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 18 years old."

*/

//===== Your code goes here =================


/*

  ===== Step 3: =====
  Now that you have the code working again, let's go back over it and, using the instructions below, edit it to make it easier to read.

  ---------------------------------------------------------------

  1. Go to "Testing your code" below

  2. Comment out the lines under "Test Step 2"

  3. Uncomment the lines under "Test Step 3" (Notice the difference between them)

  4. Go back to your code and create 2 new variables: "fullName" and "age"

  Do NOT simply type the full name and age into the new variables. Set them using the pre-existing variables, with the calculations that are currently inside of greeting.

  5. Edit the greeting string to use fullName and age instead of the other 4 variables. (the greeting should then look something like: "Hello! My name is " + fullName)

  6. Press 'Run' to ensure your code still works (output should be unchanged)

  ---------------------------------------------------------------

  ===== Testing your code =====
  - Do NOT edit this section until told to do so. 

  - Make sure one and only one of these test steps are commented out at a time

*/

// Test Step 2: 
const greeting_ = "Hello! My name is Carlos Stevenson and I am 18 years old."
const birthYear_ = 1947
const thisYear_ = 1965
const firstName_ = "Carlos"
const lastName_ = "Stevenson"
const fullName_ = firstName_ + " " + lastName_
const age_ = thisYear_ - birthYear_


// Test Step 3: (Don't forget to comment out lines under Test Step 2)

// module.exports = {
// 	testGroup: "b",
// 	greeting,
// 	birthYear,
// 	thisYear,
// 	firstName,
// 	lastName,
// 	fullName,
// 	age
// }



const values = {
    testGroup: "a",
    greeting,
    birthYear,
    thisYear,
    firstName,
    lastName
  }

const values_   = {
        	testGroup: "b",
        	greeting_,
        	birthYear_,
        	thisYear_,
        	firstName_,
        	lastName_,
        	fullName_,
        	age_
        }

let errored = false;

console.log("\n---------------------------------\n\n")

if (values.testGroup === "a") {
  if (values.birthYear !== 1947) {
    console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
    errored = true;
  }

  if (values.thisYear !== 1965) {
    console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
    errored = true;
  }

  if (values.firstName !== "Carlos") {
    console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
    errored = true;
  }

  if (values.lastName !== "Stevenson") {
    console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
    errored = true;
  }

  if (values.greeting !== "Hello! My name is Carlos Stevenson and I am 18 years old.") {
    console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
    errored = true;
  }
}

if (values_.testGroup === "b") {
  if (values_.birthYear_ !== 1947) {
    console.error(`birthYear is incorrect, it's currently: "${values.birthYear}"`);
    errored = true;
  }

  if (values_.thisYear_ !== 1965) {
    console.error(`thisYear is incorrect, it's currently: "${values.thisYear}"`);
    errored = true;
  }

  if (values_.firstName_ !== "Carlos") {
    console.error(`firstName is incorrect, it's currently: "${values.firstName}"`);
    errored = true;
  }

  if (values_.lastName_ !== "Stevenson") {
    console.error(`lastName is incorrect, it's currently: "${values.lastName}"`);
    errored = true;
  }

  if (values_.age_ !== 18) {
    console.error(`age is incorrect, it's currently: "${values.age}"`);
    errored = true;
  }

  if (values_.fullName_ !== "Carlos Stevenson") {
    console.error(`fullName is incorrect, it's currently: "${values.fullName}"`);
    errored = true;
  }

  if (values_.greeting_ !== "Hello! My name is Carlos Stevenson and I am 18 years old.") {
    console.error(`greeting is incorrect, it's currently: "${values.greeting}"`);
    errored = true;
  }
}

if (!errored && values.testGroup === "a") {
  console.log("Congrats! Move onto the next step!");
} else if (errored && values.testGroup === "a") {
  console.log("Try again")
}

if (!errored && values_.testGroup === "b") {
  console.log("Congrats! Move onto the next lesson!");
} else if (errored) {
  console.log("Try again")
}

console.log("\n---------------------------------\n\n")