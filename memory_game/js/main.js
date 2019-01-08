console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId])


	let cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne)

	let cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo)

	checkForMatch()
}

flipCard(0)

function checkForMatch() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[1] === cardsInPlay[2]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again")
		cardsInPlay = []
	}

}
}
