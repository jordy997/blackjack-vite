import './style.css';
import { 
        CreateDeck, 
        RequestNewCard,
        CreateCard,
        ComputerTurn,
        AccumulatePoints
    } from './src/usecases';

(() => {
  ("use strict");
  let deck = [];
  const types = ["C", "D", "H", "S"],
    specials = ["J", "Q", "K", "A"];

  let playersPoints = [];

  //Referencais HTML
  const requestCard = document.querySelector("#requestCard"),
    newGame = document.querySelector("#newGame"),
    stopRequest = document.querySelector("#stopRequest");

  const divPlayersCards = document.querySelectorAll(".divCartas"),
    htmlPoints = document.querySelectorAll("small"),
    winner = document.querySelectorAll("p");

  //Con esta funcion inicializamos el juego
  const startGame = (numberOfPlayers) => {
    console.clear();
    deck = CreateDeck(types, specials);
    playersPoints = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      playersPoints.push(0);
      htmlPoints[i].innerText = 0;
      divPlayersCards[i].innerText = "";
    }

    requestCard.disabled = false;
    stopRequest.disabled = false;
  };

  //Events. El segundo parametro del addEventListener es un callback
  //Player turn
  requestCard.addEventListener("click", () => {
    const card = RequestNewCard(deck);
    const playerPoints = AccumulatePoints(0, card, playersPoints, htmlPoints);
    CreateCard(card, 0, divPlayersCards);

    if (playerPoints > 21) {
      console.warn("You lose!");
      requestCard.disabled = true;
      stopRequest.disabled = true;
      ComputerTurn(
        playerPoints,
        deck,
        playersPoints,
        divPlayersCards,
        htmlPoints,
        winner
      );
    } else if (playerPoints === 21) {
      console.warn("21, great!");
      requestCard.disabled = true;
      stopRequest.disabled = true;
      ComputerTurn(
        playerPoints,
        deck,
        playersPoints,
        divPlayersCards,
        htmlPoints,
        winner,
      );
    }
  });

  stopRequest.addEventListener("click", () => {
    requestCard.disabled = true;
    stopRequest.disabled = true;
    const minPoints = playersPoints[0];

    ComputerTurn(
      minPoints,
      deck,
      playersPoints,
      divPlayersCards,
      htmlPoints,
      winner
    );
  });

  newGame.addEventListener("click", () => {
    startGame(2);
    winner[0].innerText = "";
  });
  

  return {
    newGame: startGame,
  };
})();
