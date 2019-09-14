var cards = [
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) { // if cards 1 and 2 are equivalent
		alert('You found a match!'); // tell user they found a match
	} else {
		alert('Sorry, try again.'); // ELSE tell user to try again
	}
};

function flipCard() {
	var cardId = Math.floor(Math.random() * 3) + 1; // Randomly assign one of the cards objects to variable cardId
	cardsInPlay.push(cards[cardId].rank); // Add current card to the cardsInPlay array
	console.log("User flipped " + cards[cardId].rank); // Log which card the user flipped to the console

	this.setAttribute('src', cards[cardId].cardImage); // Display cardImage of currently flipped card
	if (cardsInPlay.length === 2){ // if the user has flipped 2 cards
		checkForMatch();
	}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

// Note checkForMatch() must come before flipCard() so we can use the former in the latter

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		cards[i]; // Loop through the cards array
		var cardElement = document.createElement('img'); // Create a cardElement img each time loop runs

		cardElement.setAttribute('src', 'images/back.png'); // Allow user to see back of card for each card created
		cardElement.setAttribute('data-id', i); // Assign data-id of current card to current iteration index #

		cardElement.addEventListener('click', flipCard); // Perform flipCard function when user clicks a card
		document.getElementById('game-board').appendChild(cardElement); // Add cardElement to the game-board div
	};
};

createBoard();

/*
It might be useful to add a "Reset" button to the HTML
and set up an event in the JavaScript file so that the user can reset the game after playing.

For an extra challenge, consider how you could keep track of and display the user's score.
*/

function reset() {
	for (var i = 0; i < cards.length; i++) {
		document.querySelectorAll('img')[i].setAttribute('src', 'images/back.png');
	};
	cardsInPlay = [];
};
document.getElementById('reset').addEventListener('click', reset);
