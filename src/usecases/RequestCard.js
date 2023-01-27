
/**
 * This function allow you to take a card
 * @param {Array<String>} deck
 * @returns {String} A new card from the deck
 */

export const RequestNewCard = (deck) => {
  if (!deck || deck.length === 0) {
    alert("No hay mas cartas en la baraja");
  }
  const card = deck.pop();
  return card;
};
