# wats1020-fizzbuzz

This is the first Javascript coding assignment for WATS1020: Introduction to Javascript at Seattle University. The goal of this project is to illustrate an understanding of the basic concepts of Javascript, including variable assignment, loops, and conditionals.

This assignment takes inspiration from the old interview challenge known as "Fizzbuzz". This is a common coding challenge to see presented in job interviews, and there are many ways to solve it in every language. We are not aiming to create the most sophisticated, obscure or tiny implementation. We aim to create a clear, understandable logic that builds on the basic components of Javascript.

Requirements
============

Fizzbuzz originates as a children's game to teach them about division. The rules of the game are thus:

1. Players stand in a circle and count off in sequence beginning with the number "1".
2. For each player, when it is their turn to count off, they must first decide if the number they have come to
   is divisble by 3, 5, or both. 
   * If the number is divisible by 3, the player says, "Fizz."
   * If the number is divisible by 5, the player says, "Buzz."
   * If the number is divisible by **both** 3 and 5, the player says, "FizzBuzz."
   * If none of these conditions are true, the player says the number.
   
In the children's game, if a child gets one wrong, they must sit down, and the last child standing wins.

We will use a slightly modified verison of the play. Our goal is to create a script that will run through the numbers 1-20 and highlight all of the "Fizz", "Buzz", and "FizzBuzz" digits in that sequence. Here are the requirements for your script:

* Create a new file called ``fizzBuzz.js`` and write a script to execute the FizzBuzz rules and determine the first 20 correct responses.
* Iterate using a ``for`` loop through the sequence of numbers 1-20.
* For each number, check these conditions and respond appropriately:
  * If the number is divisible by 3, print "Fizz" to the console.
  * If the number is divisible by 5, print "Buzz" to the console.
  * If the number is divisible by **BOTH** 3 and 5, print "FizzBuzz" to the console.
  * If none of these conditions are met, print the number to the console.
* Use proper variable scope and type definitions where appropriate.
* Use proper variable naming styles (camelCase) and comment your code to indicate functionality in plain (non-jargon) language.

Here is an example output that shows what any successful solution is going to give as a result:

    1 
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
    11
    Fizz
    13
    14
    FizzBuzz
    16
    17
    Fizz
    19
    Buzz

Tips
====

* You can write Javascript using the Developer Tools in any modern web browser. You can get tips about using Developer Tools all over. Here's a good place to start: https://developer.chrome.com/devtools/docs/authoring-development-workflow
* 
