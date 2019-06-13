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
	cardImage: "king-of-hearts.png"
}
];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) { // if cards 1 and 2 are equal
		alert('You found a match!'); // tell user they found a match
	} else {
		alert('Sorry, try again.'); // ELSE tell user to try again
	}
};

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank); // Log which card the user flipped to the console
	if (cardsInPlay.length === 2){ // if the user has flipped 2 cards
		checkForMatch();
	}
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};
// Note checkForMatch() must come before flipCard() so we can use the former in the latter
flipCard(0);
flipCard(2);
