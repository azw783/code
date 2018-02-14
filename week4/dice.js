// This function will roll the dice
// by randomly choosing two new numbers
// and then updating the images on the screen.


let rollDice = function(event) {

  // Your code goes here:

  let random1 = Math.floor(Math.random() * 6) + 1
  let random2 = Math.floor(Math.random() * 6) + 1


  jQuery(jQuery("#diceImg")[0]).attr("src", "images/dice/" + random1 + ".png")
  jQuery(jQuery("#diceImg1")[0]).attr("src", "images/dice/" + random2 + ".png")
}

jQuery("#roll_dice").on("click", rollDice)


// HINT: To generate a random integer in JavaScript
// between 0 and some number LESS THAN 'n', you can use this code:
// Math.floor(Math.random() * n);
//
// Examples:
//
// 1. Generate a random integer from 0 to 5:
// Math.floor(Math.random() * 5);

// 2. Generate a random number from 1 to 6:
// Math.floor(Math.random() * 5) + 1;
