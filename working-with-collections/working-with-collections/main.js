/* global _ */
/* eslint-disable no-console */
// console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'John', hand: [], points: 0 },
  { name: 'Steve', hand: [], points: 0 },
  { name: 'Sarah', hand: [], points: 0 },
  { name: 'Tom', hand: [], points: 0 }
];
var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var points = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var suit = ['hearts', 'diamonds', 'spades', 'clubs'];
var cards = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    cards.push({ rank: rank[j], suit: suit[i] });
  }
}
cards = _.shuffle(cards);
for (var k = 0; k < players; k++) {
  players[k].hand = _.pullAt(cards, [0, 1]);
  var card1 = players[k].hand[0];
  var card2 = players[k].hand[1];
  if (card1 === rank[0] && card2 === rank[9]) {
    players[k].points += 21;
  } else {
    players[k].points += points[_.indexOf(rank, players.hand[0])];
    players[k].points += points[_.indexOf(rank, players.hand[1])];
  }

}
for (var l = 0; l < players; l++) {
  var winner = null;
  var highestPoints = 0;
  if (players.points > highestPoints) {
    winner = players[l];
  }
  return winner;
}
