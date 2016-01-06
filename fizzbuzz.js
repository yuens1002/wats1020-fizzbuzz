// WATS 1020 FizzBuzz Assignment - Sunny Yuen

/* variables and initial assignments to hold 
the total number of each divisible occurance */
var 
num_of_Fizz = 0,
num_of_Buzz = 0,
num_of_FizzBuzz = 0;

// a for loop to loop thru a finite range of integars
for (i = 1; i <= 20; i++) {
    /* if the integer is divisible by 3 & 5 console 
    log FizzBuzz & add 1 to total # of FizzBuzz */
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log ('FizzBuzz');
        ++num_of_FizzBuzz;
    /* if the integer is divisible by 3 console
    log Fizz & add 1 to total # of Fizz */
    } else if (i % 3 === 0) {
        console.log ('Fizz');
        ++num_of_Fizz;
    /* if the integer is divisible by 5 console 
    log Buzz & add 1 to total # of Buzz */    
    } else if (i % 5 === 0) {
        console.log ('Buzz');
        ++num_of_Buzz;
    }
    /* if the integar is neither divisible by 
    3 or 5 console log the integer */ 
    else {
        console.log (i);
    }
}

// console log total number of each occurance types
console.log ('There are total number of ' + num_of_FizzBuzz + 
             ' FizzBuzz, ' + num_of_Fizz + ' Fizz, and ' + num_of_Buzz + ' Buzz');