console.log("Up and running!");

var score = 0;

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.querySelector('#game-board').appendChild(cardElement);
	}
}

var cardsInPlay = [];

function flipCard() {
	let cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	setTimeout(checkForMatch, 200);
}

function clearBoard() {
	document.querySelectorAll('img').forEach(function(element) {
		element.setAttribute('src', 'images/back.png');
	})
	cardsInPlay = []
}

function incrementScore() {
	if (!document.querySelector('#scoreBox')) {
		var scoreBox = document.createElement('div');
		scoreBox.setAttribute('id', 'scoreBox')
		scoreBox.textContent = "Score: " + (score += 1)
		document.querySelector('#game-board').appendChild(scoreBox)

	} else {
		document.querySelector('#scoreBox').textContent = "Score: " + (score += 1)
	}
}

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			clearBoard();
			incrementScore()
		} else {
			alert("Sorry, try again");
			cardsInPlay = [];
			clearBoard();
		}
	}
}


createBoard();
