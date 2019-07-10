"use strict";

//Username prompt
var userName = prompt('Welcome to Julie\'s \'About Me\' page. What is your name?');
  alert('Hello, ' + userName + '! Let\'s play a guessing game to get to know Julie a little better.');

//Question 1
var harpAge = prompt("First, Did you know Julie started playing the harp at 4-years-old?");

//convert to lowercase
harpAge = harpAge.toLowerCase();

//yes user input
if(harpAge === 'yes' || harpAge === 'y') {
  alert('You did? You must know her very well.');
} else if(harpAge === 'no' || harpAge === 'n') {
  alert('You did not? That is ok. She was 4-years-old back in 1993.');
  } else {
   alert('Invalid entry.');
  }

//console log Q1
  console.log('User\'s response to Question 1: ' + harpAge);

// ------------------------------------

//Question 2
var grewupMinn = prompt('Julie grew up shoveling snow in the "Great White North". Did you know that is one nickname for Minnesota?');

//convert to lowercase
grewupMinn = grewupMinn.toLowerCase();

//yes user input
if(grewupMinn === 'yes' || grewupMinn === 'y') {
  alert('Isn\'t Minnesota trivia the best? Another name for the state is the "Mini Soda."');
} else if(grewupMinn === 'no' || grewupMinn === 'n') {
    alert('No? Another name for the state is the "Mini Soda."');
  } else {
    alert('Invalid entry.');
  }

    //console log Q2
    console.log('User\'s response to Question 2: ' + grewupMinn);

    // ------------------------------------

//Question 3
var bakingFun = prompt("Do you know what Babka is?");

//convert to lowercase
bakingFun = bakingFun.toLowerCase();

//yes user input
if(bakingFun === 'yes' || bakingFun === 'y') {
  alert('It is delicious, isn\'t it? What a delicious cinnamon sweet bread.');
} else if(bakingFun === 'no' || bakingFun === 'n') {
    alert('It is a delicious cinnamon sweet bread that is rolled and twisted and baked in a bread pan.');
  } else {
    alert('Invalid entry.');
  }
    //console log Q1
    console.log('User\'s response to Question 3: ' + bakingFun);

// ------------------------------------

//Question 4
var wildCat = prompt("Julie loves wild cats like jaguars, cougars, and snow leopards. She even visited the Wild Felid Advocacy Center on Harstine Island by Shelton, WA. Do you want to visit that place, too?");

//convert to lowercase
wildCat = wildCat.toLowerCase();

//yes user input
if(wildCat === 'yes' || wildCat === 'y') {
  alert('Great. Here is the address: 3111 E Harstine Island Rd N, Shelton, WA 98584');
} else if (wildCat === 'no' || wildCat === 'n') {
    alert('Ok, maybe some other time.');
  } else {
    alert('Invalid entry.');
  }

    //console log Q1
    console.log('User\'s response to Question 4: ' + wildCat);

// ------------------------------------

//Question 5
var yogaTrain = prompt('Do you think Julie learned to teach yoga in Kathmandu?');

//convert to lowercase
yogaTrain = yogaTrain.toUpperCase();

//yes user input
if(yogaTrain === 'YES' || yogaTrain === 'Y') {
  alert('Nah, she tricked ya. She trained at a lovely studio in North Seattle in 2011.');
} else if (yogaTrain === 'NO' || yogaTrain === 'N') {
   alert ('She wishes! Nepal is where she wants to backpack for her thrid solo backpacking trip. She trained at a lovely studio in North Seattle in 2011.');
}   else {
     alert('Invalid entry.');
  }
    //console log Q1
    console.log('User\'s response to Question 5: ' + yogaTrain);

