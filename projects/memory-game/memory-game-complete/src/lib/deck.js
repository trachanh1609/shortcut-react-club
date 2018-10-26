/**
 * deck.js
 *
 * file containing the list of all cards and methods to manipulate it (shuffle, compare)
 */

/**
 * A card is a tuple of shape [{String} suite, {String} value]
 * @typedef {[String, String]} Card
 */

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suites = ["diamonds", "hearts", "clubs", "spades"];

/**
 * a list of 54 playing cards
 * @type {[Card]}
 */
export const deck = suites.reduce(
	(deck, suite) => [...deck, ...values.map(value => [suite, value])],
	[]
);

/**
 *
 * shuffle takes an array and return a new shuffled array with all the values of the original array.
 * it does not mutate the initial array.
 *
 * @param {[Card]} array a list of cards to shuffle
 * @returns {[Card]} a new shuffled array
 */
export const shuffle = array => {
	let copy = [...array];
	let res = [];

	while (copy.length > 0) {
		const i = Math.floor(Math.random() * copy.length);

		res.push(copy[i]);
		copy = copy.filter((_, j) => j !== i);
	}
	return res;
};

/**
 *
 * compare takes two cards and  return the distance between the two cards in the deck.
 *
 * 0 means the cards are the same.
 * Negative value means the first card appears before the second card.
 * Positive value means the first card appears after the second card.
 *
 * @param {Card} firstCard
 * @param {Card} secondCard
 *
 * @return {number} the distance between the two cards
 */
export const compare = ([s1, v1], [s2, v2]) => {
	return (
		deck.findIndex(([s, v]) => s === s2 && v === v2) -
		deck.findIndex(([s, v]) => s === s1 && v === v1)
	);
};

export default deck;
