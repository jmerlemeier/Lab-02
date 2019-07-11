// "use strict";

//define user score
var scorecard = 0;

//Username prompt
var userName = prompt('Welcome to Julie\'s \'About Me\' page. What is your name?');
alert('Hello, ' + userName + '! Let\'s play a guessing game to get to know Julie a little better.');

//---------------------------Function Section-------------------//


//Question 1
function question1(ans1, ans2){
  var harpAge = prompt("First, Did you know Julie started playing the harp at 4-years-old?");

  //convert to lowercase
  harpAge = harpAge.toLowerCase();

  //The only way to escape the loop is to have valid input
  while(true){

    console.log('The harpAge var is '+harpAge)
    if(harpAge === ans1 || harpAge === ans2) {
      alert('You did? You must know her very well.');
      scorecard++;
      break;

    } else if(harpAge === 'no' || harpAge === 'n') {
      alert('You did not? That is ok. She was 4-years-old back in 1993.');
      break;

    } else {
      harpAge = prompt("Invalid entry, please use yes or no. Did you know Julie started playing the harp at 4-years-old?");
      harpAge = harpAge.toLowerCase();
      console.log('The new harpAge is '+harpAge);
    }
  }   
}

// //Question 2
function question2(ans1, ans2, neg1, neg2, question){
  var grewupMinn = prompt(question);
  //convert to lowercase
  grewupMinn = grewupMinn.toLowerCase();
  console.log('The grewupMinn var is '+grewupMinn);

  //the only way to escape the loop is to put in valid input
  while(true){
    if(grewupMinn === ans1 || grewupMinn === ans2) {
      alert('Isn\'t Minnesota trivia the best? Another name for the state is the "Mini Soda."');
      scorecard++;
      break;

    } else if(grewupMinn === neg1 || grewupMinn === neg2) {
      alert('No? Another name for the state is the "Mini Soda."');
      break;

    } else {
      grewupMinn = prompt('Invalid entry, please use yes or no. '+question);
      grewupMinn = grewupMinn.toLowerCase();
      console.log('The new grewupMinn var is '+grewupMinn);
    }
  }
}

//     // ------------------------------------

// //Question 3
function question3(ans1, ans2, neg1, neg2, question){
  var bakingFun = prompt(question);
  //convert to lowercase
  bakingFun = bakingFun.toLowerCase();
  console.log('The bakingFun var is '+bakingFun)
  
  //the only way to escape the loop is to have good input
  while(true){
    if(bakingFun === ans1 || bakingFun === ans2) {
      alert('It is delicious, isn\'t it? What a delicious cinnamon sweet bread.');
      scorecard++;
      break;

    } else if(bakingFun === neg1 || bakingFun === neg2) {
      alert('It is a delicious cinnamon sweet bread that is rolled and twisted and baked in a bread pan.');
      break;

    } else {
      bakingFun = prompt("Invalid input, please use yes or no. " + question);
      bakingFun = bakingFun.toLowerCase();
      console.log('The new bakingFun var is '+bakingFun);
    }
  }
}

// // ------------------------------------

// // //Question 4
// var wildCat = prompt("Julie loves wild cats like jaguars, cougars, and snow leopards. She even visited the Wild Felid Advocacy Center on Harstine Island by Shelton, WA. Do you want to visit that place, too?");

// //convert to lowercase
// wildCat = wildCat.toLowerCase();

// //yes user input
// if(wildCat === 'yes' || wildCat === 'y') {
//   alert('Great. Here is the address: 3111 E Harstine Island Rd N, Shelton, WA 98584');
//   scorecard += 1;
// } else if (wildCat === 'no' || wildCat === 'n') {
//     alert('Ok, maybe some other time.');
//   } else {
//     alert('Invalid entry.');
//   }

//     //console log Q1
//     console.log('User\'s response to Question 4: ' + wildCat);

// // // ------------------------------------

// // //Question 5
// var yogaTrain = prompt('Do you think Julie learned to teach yoga in Kathmandu?');

// //convert to lowercase
// yogaTrain = yogaTrain.toUpperCase();

// //yes user input
// if(yogaTrain === 'YES' || yogaTrain === 'Y') {
//   alert('Nah, she tricked ya. She trained at a lovely studio in North Seattle in 2011.');
// } else if (yogaTrain === 'NO' || yogaTrain === 'N') {
//    alert ('She wishes! Nepal is where she wants to backpack for her third solo backpacking trip. She trained at a lovely studio in North Seattle in 2011.');
//    scorecard += 1;
// }   else {
//      alert('Invalid entry.');
//   }
// //console log 
//     console.log('User\'s response to Question 5: ' + yogaTrain);

// // // ------------------------------------

// //Question 6 for and while

// var guess = prompt('Guess how many times have I been to France:  ');
// var newGuess = Number(guess);
// var answer = 3;

// for(var i = 0; i < 4; i++) {
//   if(answer === newGuess) {
//     alert("Yes, I visited Paris, Brittany, central, and southern France when I was 14, 27, and 28-years-old. ");
//     scorecard += 1;
//     break;
//   } else if(newGuess > 3) {
//     newGuess = parseInt(prompt("Too High! Please try again."));
//   } else { 
//     newGuess = parseInt(prompt("Too Low! Please try again."));
//     }
// }

// //console log 
// console.log('User\'s response to Question 6: ' + answer);

// // ------------------------------------
// //Question 7

// // define variables
// var sweetArray = ['twix', 'cookies', 'brownies', 'DQ Ice Cream Cake', 'gummy worms', 'peanut m&ms'];
// var escape = false;
// var numGuesses = 0;
// // while loop
// while(escape === false && numGuesses < 6){
//   var theAnswer = prompt('Guess some of my favorite sweets.');
//     for(var i = 0; i < sweetArray.length; i++){
//       if(theAnswer === sweetArray[i]){
//         console.log('Inside for statement');
//         alert('Yay!');
//         scorecard += 1;
//         escape = true;
//         break;
//       } 
//     }
//     numGuesses++;
// }  
// // Possible Answers

// document.write(sweetArray);

// //console log 
// console.log('User\'s response to Question 7: ' + theAnswer);

// // ------------------------------------

// //Counter Display. You could replace current: getelementbyID and textContent

// document.write(scorecard);
// console.log('The scorecard is: ' + scorecard);

//----------------Executasdfaable? Code--------------//
//question1('yes','y');
question2('yes', 'y', 'no', 'n', 'Julie grew up shoveling snow in the "Great White North". Did you know that is one nickname for Minnesota?');
question3('yes', 'y', 'no', 'n', "Do you know what Babka is?");