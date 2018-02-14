//
// CARDS
//

let dealCards = function() {
  let deck = shuffledDeckOfCards()
  console.log(deck)

  let card1 = deck[0]
  let card2 = deck[1]
  let card3 = deck[2]
  let card4 = deck[3]
  let card5 = deck[4]

  let firstImage = jQuery('#cards img')[0]
  let secondImage = jQuery('#cards img')[1]
  let thirdImage = jQuery('#cards img')[2]
  let fourthImage = jQuery('#cards img')[3]
  let fifthImage = jQuery('#cards img')[4]

  jQuery(firstImage).attr("src", "images/cards/" + card1.face + "_of_" + card1.suit + ".png")
  jQuery(secondImage).attr("src", "images/cards/" + card2.face + "_of_" + card2.suit + ".png")
  jQuery(thirdImage).attr("src", "images/cards/" + card3.face + "_of_" + card3.suit + ".png")
  jQuery(fourthImage).attr("src", "images/cards/" + card4.face + "_of_" + card4.suit + ".png")
  jQuery(fifthImage).attr("src", "images/cards/" + card5.face + "_of_" + card5.suit + ".png")

}

// 1. Can we improve the code in this function?
//    Let's use a loop to automate most of this work.



// Here is a function that returns an array of objects to
// represent a shuffled deck of cards.
let shuffledDeckOfCards = function() {
  // create a sorted deck of cards
  let faces = [ 'ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']

  let deck = [];
  for (let x = 0; x < faces.length; x++) {
    for (let y = 0; y < suits.length; y++) {
      deck.push({ face: faces[x], suit: suits[y]});
    };
  };
  // console.debug("The deck of cards is now:")
  // console.debug(deck)

  // now, shuffle the deck
  let currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
  return deck;
}

let cardsLink = document.getElementById("deal_cards")
cardsLink.addEventListener("click", dealCards);
