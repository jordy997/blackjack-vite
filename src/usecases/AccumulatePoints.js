import { CardValue } from "./CardValue";

/**
 * This function returns an accumulation of points
 * @param {Number} turn 
 * @param {String} card 
 * @param {Array<String>} playerPoints 
 * @param {HTMLElement} htmlPoints 
 * @returns playersPoints[]
 */

export const AccumulatePoints = (turn, card, playersPoints, htmlPoints) => {
  playersPoints[turn] = playersPoints[turn] + CardValue(card);
  htmlPoints[turn].innerText = playersPoints[turn];
  return playersPoints[turn];
};
