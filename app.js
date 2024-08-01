/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/



//Exercise 1

const maxedOfTwoNumbers = (z,r) => {
    if(z >=r ) {
        return z;
    } else {
        return r;
    }   
}

console.log(maxedOfTwoNumbers(6,9));



/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/



//Exercise 2


const isAdult = (age) => {
    if(age >= 18 ) {
        return 'Adult';
    } else {
        return 'Minor';
    }    
    }
console.log(isAdult(20));



/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/




//Exercise 3



const isCharAVowel = (letter) => {
    if(letter === 'a'|| letter === 'e' || letter === 'i' || letter ==='o' || letter === 'u')    {
        return 'True';    
    }   else {
        return 'False';
    }    
    }
console.log(isCharAVowel('u'));


/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


//Exercise 4


const generateEmail =(name,domain) => {
    return `${name}@${domain}`;
}
console.log(generateEmail('demonte','gmail.com'));





/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

//Exercise 5

const greetUser =(name,day) => {
    return`${day}, ${name}`;
}
console.log(greetUser('Demonte','Goodmorning!'));



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/


//Exercise 6

const maxOfThree =(a,b,c) => {
    if(a > b && a > c) {
        return a;
    } else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }    
    }

    console.log(maxOfThree(25,10,8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/


//Exercise 7
const calculateTip = (billAmount, tipPercentage) => {
    return billAmount * (tipPercentage / 100)
}

console.log(calculateTip(50,20));



/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/


//Exercise 8


const convertTempature = (tempature,scale) => {

    if(scale === 'C') {
        const convertToF = ((9/5) * (tempature) + 32);
        return `${convertToF} (Fahrenheit)`;
    } else if(scale === 'F') {
       const convertToC = (tempature - 32 * 5/9);
        return `${convertToC} (Celsius)`; 
    }  
    
}
console.log(convertTempature(40,'F'));




/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/



//Exercise 9

const basicCalculator = (a,b,math) => {

    if(math==='add') {
        return a + b;
    } else if(math==='subtract') {
        return a - b;
    } else if(math==='multiply') {
        return a * b;
    } else if (math==='divide') {
        return a / b;
    } else {
        'Invalid Operation';
    }    

    }    
    
       console.log(basicCalculator(10,5,'subtract'));


/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/


       //Exercise 10


    const calculateGrade =(score) => {
        if(score >= 90) {
            return 'A';
        } else if(score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if(score >= 60) {
            return 'D';
        } else  {
            return 'F';
        }    
        }    
         console.log(calculateGrade(75));


/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/



         //Exercise 11

         function createUsername(firstName, lastName) {
            const firstPart = firstName.substring(0, 3);
            const lastPart = lastName.substring(0, 3);
            const totalLength = firstName.length + lastName.length;
            const username = firstPart + lastPart + totalLength;
            return username;
        }
        
        console.log(createUsername("Demonte", "Guyton"));


/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/



        //Exercise 12

        function numArgs() {
            return arguments.length;
          }
          
          console.log( numArgs(1,2,3,4,5,5,5,5,5,5,5));



        
    








    
      









