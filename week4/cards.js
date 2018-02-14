//
// CARDS
//

let dealCards = function() {
  let deck = shuffledDeckOfCards()
  console.log(deck)



  // window.alert("This isn't implemented yet.  Can you build it?")
}

let x = 5;

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
