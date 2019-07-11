// "use strict";

//define user score
var scorecard = 0;

//Username prompt
var userName = prompt('Welcome to Julie\'s \'About Me\' page. What is your name?');
alert('Hello, ' + userName + '! Let\'s play a guessing game to get to know Julie a little better.');

//---------------------------Function Section-------------------//

// Generic Question Prompt works for 1, 2, 3, 4, 5
function bigQuestion(ans1, ans2, neg1, neg2, question, ifTrue, ifFalse){
  var bakingFun = prompt(question);
  //convert to lowercase
  bakingFun = bakingFun.toLowerCase();
  console.log('The var is '+bakingFun+' for question '+question)
  
  //the only way to escape the loop is to have good input
  while(true){
    if(bakingFun === ans1 || bakingFun === ans2) {
      alert(ifTrue);
      scorecard++;
      break;

    } else if(bakingFun === neg1 || bakingFun === neg2) {
      alert(ifFalse);
      break;

    } else {
      bakingFun = prompt("Invalid input, please use yes or no. " + question);
      bakingFun = bakingFun.toLowerCase();
      console.log('The new var is '+bakingFun);
    }
  }
}

// // ------------------------------------

//Question 6 for and while
function question6(promptInput, answer){
  var guess = prompt(promptInput);
  var newGuess = Number(guess);
  console.log('The guess is '+guess+' the answer is '+answer);

  for(var i = 0; i < 4; i++) {
    console.log('The guess is '+guess+' the answer is '+answer);
    if(answer === newGuess) {
      alert("Yes, I visited Paris, Brittany, central, and southern France when I was 14, 27, and 28-years-old. ");
      scorecard++;
      break;
    } else if(newGuess > 3) {
      newGuess = parseInt(prompt("Too High! Please try again."));
    } else { 
      newGuess = parseInt(prompt("Too Low! Please try again."));
    }
  }
}

// ------------------------------------
//Question 7
function question7(sweetArray, amountOfGuesses){
  // define variables
  var escape = false;
  var numGuesses = 0;

  // while loop
  while(escape === false && numGuesses < amountOfGuesses){
    var theAnswer = prompt('Guess some of my favorite sweets.');

    for(var i = 0; i < sweetArray.length; i++){
      if(theAnswer === sweetArray[i]){
        console.log('Inside for statement');
        alert('Yay!');
        scorecard++;
        escape = true;
        break;
      } 
    }
    if(escape === false){
      alert('You are a dummy. This is set in stone and cannot be changed. Ever. Forever. The end.')
    }
    numGuesses++;
    console.log(numGuesses)
  }  
  // Possible Answers
  
  document.write(sweetArray);
  
  //console log 
  console.log('User\'s response to Question 7: ' + theAnswer);
}

// // ------------------------------------

// //Counter Display. You could replace current: getelementbyID and textContent

// document.write(scorecard);


//----------------Executasdfaable? Code--------------//
//question 1
bigQuestion('yes','y', 'no', 'n', "First, Did you know Julie started playing the harp at 4-years-old?", 'You did? You must know her very well.', 'You did not? That is ok. She was 4-years-old back in 1993.');

//question 2
bigQuestion('yes', 'y', 'no', 'n', 'Julie grew up shoveling snow in the "Great White North". Did you know that is one nickname for Minnesota?', 'Isn\'t Minnesota trivia the best? Another name for the state is the "Mini Soda."', 'No? Another name for the state is the "Mini Soda."');

//question 3
bigQuestion('yes', 'y', 'no', 'n', "Do you know what Babka is?", 'It is delicious, isn\'t it? What a delicious cinnamon sweet bread.', 'It is a delicious cinnamon sweet bread that is rolled and twisted and baked in a bread pan.');

//question 4
bigQuestion('yes', 'y', 'no', 'n', "Julie loves wild cats like jaguars, cougars, and snow leopards. She even visited the Wild Felid Advocacy Center on Harstine Island by //Shelton, WA. Do you want to visit that place, too?", 'Great. Here is the address: 3111 E Harstine Island Rd N, Shelton, WA 98584', 'Ok, maybe some other time.');

//question 5 yes and no are swapped because the no answer increases the score.
bigQuestion('no', 'n', 'yes', 'y', 'Do you think Julie learned to teach yoga in Kathmandu?', 'She wishes! Nepal is where she wants to backpack for her third solo backpacking trip. She trained at a lovely studio in North Seattle in 2011.', 'Nah, she tricked ya. She trained at a lovely studio in North Seattle in 2011.');

//question 6
question6('Guess how many times have I been to France:  ', 3);

//question 7
question7(['twix', 'cookies', 'brownies', 'DQ Ice Cream Cake', 'gummy worms', 'peanut m&ms'], 6);

console.log('The scorecard is: ' + scorecard);