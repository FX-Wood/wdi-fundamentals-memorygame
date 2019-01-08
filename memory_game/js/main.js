console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne)

cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo)

console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[1] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again")
		cardsInPlay = []
	}

}