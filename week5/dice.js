let greet = function() {
  let favorites = ["purple", 21, "hockey"]

  for (let fave of favorites) {
    console.log(fave)
  }
}

// This function will roll the dice
// by randomly choosing two new numbers
// and then updating the images on the screen.
let rollDice = function(event) {
  console.log(event)

  let diceImages = jQuery("#dice img")
  for (let image of diceImages) {
      rollDie(image)
    }
}

let rollDie = function(imageElement) {
    let value = Math.floor(Math.random() * 6) + 1;
    jQuery(imageElement).attr("src", "images/dice/" + value + ".png")
}


jQuery("#roll_dice").on("click", rollDice)

let handleImageClick = function() {
  console.log("Got a click event", jQuery(this))
  let theImage = jQuery(event.target)
  let srcValue = theImage.attr("src")
  console.log(srcValue)
}


jQuery("img").on("click", handleImageClick)

// 1. Can we improve the code in this function?
//    Let's "refactor" repetitive code by looking for duplication.
//
// 2. Can we generalize this code to allow for three dice? Or five?
//
// 3. Can we identify the DOM element that caused an event?
//    Inside of an event handler function, we can use 'this' to refer
//    to the element that triggered the event.
