import _ from 'underscore'

/**
 * This function creates a new shuffled deck
 * @param {Array<String>} cardsTypes Example: ["C", "D", "H", "S"] 
 * @param {Array<String>} specials  Example: ["J", "Q", "K", "A"]
 * @returns {Array<String>} returns a new deck of cards
 */


export const CreateDeck = (cardsTypes, specials) => {
    if(!cardsTypes || cardsTypes.length === 0) 
        throw new Error('cardsTypes are required.')
    if(!specials || specials.length === 0)
        throw new Error('specials are required.')
  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let type of cardsTypes) {
      deck.push(i + type);
    }
  }
  for (let type of cardsTypes) {
    for (let sp of specials) {
      deck.push(sp + type);
    }
  }

  return _.shuffle(deck);
};
