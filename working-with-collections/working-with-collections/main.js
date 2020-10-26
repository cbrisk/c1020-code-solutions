/* global _ */
/* eslint-disable no-console */
// console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  { name: 'John', hand: [] },
  { name: 'Steve', hand: [] },
  { name: 'Sarah', hand: [] },
  { name: 'Tom', hand: [] }
];
var rank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suit = ['hearts', 'diamonds', 'spades', 'clubs'];
var cards = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    cards.push({ rank: rank[j], suit: suit[i] });
  }
}
function playGame(players, cards) {
  var pointsVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  var points = [0, 0, 0, 0];
  cards = _.shuffle(cards);

  while (cards.length > 0) {
    for (var k = 0; k < players.length && cards.length > 0; k++) {
      players[k].hand = _.pullAt(cards, [0, 1]);
      var card1 = players[k].hand[0].rank;
      var card2 = players[k].hand[1].rank;
      if (card1 === rank[0] && card2 === rank[9]) {
        points[k] += 21;
      } else {
        points[k] += pointsVal[_.indexOf(rank, card1)];
        points[k] += pointsVal[_.indexOf(rank, card2)];
      }
    }
  }
  var highestPoints = Math.max(...points);
  var indexWinner = points.indexOf(highestPoints);
  console.log('The winner is: ', players[indexWinner]);
}
playGame(players, cards);
