import { RequestNewCard } from "./RequestCard";
import { AccumulatePoints } from "./AccumulatePoints"
import { CreateCard } from "./CreateCard";

/**
 * This function starts the computer game 
 * @param {Number}} minPoints that the computer need to win
 * @param {Array<String>} deck
 * @param {Number} playersPoints
 * @param {HTMLElement} htmlPoints 
 */
export const ComputerTurn = (
  minPoints,
  deck,
  playersPoints = [],
  divPlayersCards,
  htmlPoints,
  winner
) => {
  let computerPoints = 0;

  if (!minPoints) throw new Error("Puntos mínimos son necesarios");

  do {
    const card = RequestNewCard(deck);
    const turn = playersPoints.length - 1;

    computerPoints = AccumulatePoints(turn, card, playersPoints, htmlPoints);
    CreateCard(card, turn, divPlayersCards);
  } while (computerPoints < minPoints && minPoints <= 21);

  determineWinner(playersPoints, winner);
};

const determineWinner = (playersPoints, winner) => {
  const [minPoints, computerPoints] = playersPoints;

  return setTimeout(() => {
    computerPoints === minPoints
      ? (winner[0].innerText = "Es un empate, nadie gana!")
      : minPoints > 21
      ? (winner[0].innerText = "La computadora gana!")
      : computerPoints > 21
      ? (winner[0].innerText = "El jugador gana!")
      : (winner[0].innerText = "La computadora gana!");
  }, 350);
};