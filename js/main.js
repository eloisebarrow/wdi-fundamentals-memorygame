var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) { // if cards 1 and 2 are equal
		console.log('You found a match!'); // tell user they found a match
	} else {
		console.log('Sorry, try again.'); // ELSE tell user to try again
	}
};

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]); // Log which card the user flipped to the console
	if (cardsInPlay.length === 2){ // if the user has flipped 2 cards
		checkForMatch();
	}
};
// Note checkForMatch() must come before flipCard() so we can use the former in the latter
flipCard(0);
flipCard(2);
