
/**
 * This function create a card for the player for his turn.
 * @param {String} card receive a card 
 * @param {Number} turn
 * @param {HTMLElement} divPlayersCards 
 * @returns 
 */
export const CreateCard = (card, turn, divPlayersCards) => {
  const imgCard = document.createElement("img");
  imgCard.src = `assets/cartas/${card}.png`;
  imgCard.classList.add("carta");
  divPlayersCards[turn].append(imgCard);

  return imgCard;
};
