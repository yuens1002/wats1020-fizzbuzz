// WATS 1020 FizzBuzz Assignment - Sunny Yuen

/* a function is necssary b/c the action should 
only occur when the user clicks submit */

function doFizzBuzz() {
    
    /* variables and initial assignments to hold 
    the total number of each divisible occurance */
    var
    num_of_Fizz = 0,
    num_of_Buzz = 0,
    num_of_FizzBuzz = 0,
    stats = document.getElementById('stats'),    
    div = document.getElementById('results'),
    num_start = document.getElementById('1st-num').value,
    num_end = document.getElementById('2nd-num').value;

    // a for loop to loop thru a finite range of integars
    for (i = num_start; i <= num_end; i++) {
        /* if the integer is divisible by 3 & 5 console 
        log FizzBuzz & add 1 to total # of FizzBuzz */
        if ((i % 3 === 0) && (i % 5 === 0)) {
            div.innerHTML += 'FizzBuzz ';
            ++num_of_FizzBuzz;
        /* if the integer is divisible by 3 console
        log Fizz & add 1 to total # of Fizz */
        } else if (i % 3 === 0) {
            div.innerHTML += 'Fizz ';
            ++num_of_Fizz;
        /* if the integer is divisible by 5 console 
        log Buzz & add 1 to total # of Buzz */    
        } else if (i % 5 === 0) {
            div.innerHTML += 'Buzz ';
            ++num_of_Buzz;
        }
        /* if the integar is neither divisible by 
        3 or 5 display the numbers on the page */
        /* http://stackoverflow.com/questions/5677799/how-to-append-data-to-div-using-javascript */
        else {
            div.innerHTML += i + ' ';
        }   
    }
    /* displays the total number of each occurances */  
    stats.innerHTML = 'There are total number of ' + num_of_FizzBuzz + 
    ' FizzBuzz, ' + num_of_Fizz + ' Fizz, and ' + num_of_Buzz + ' Buzz';  
}  


    