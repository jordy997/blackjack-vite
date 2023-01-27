/**
 * Get card value
 * @param {String} card 
 * @returns {Number} card value
 */
export const CardValue = (card) => {
  const value = card.substring(0, card.length - 1);

  return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
};