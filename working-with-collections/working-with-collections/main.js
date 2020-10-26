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
var suit = ['hearts', 'diamonds', 'spades', 'clubs'];
var cards = [];
for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    cards.push({ rank: rank[j], suit: suit[i] });
  }
}
function playGame(players, cards) {
  var pointsVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  cards = _.shuffle(cards);

  while (cards.length > 0) {
    for (var k = 0; k < players.length && cards.length > 0; k++) {
      players[k].hand = _.pullAt(cards, [0, 1]);
      var card1 = players[k].hand[0].rank;
      var card2 = players[k].hand[1].rank;
      if (card1 === rank[0] && card2 === rank[9]) {
        players[k].points += 21;
      } else {
        players[k].points += pointsVal[_.indexOf(rank, card1)];
        players[k].points += pointsVal[_.indexOf(rank, card2)];
      }
    }
  }
  var highestPoints = 0;
  for (var l = 0; l < players.length; l++) {
    if (players[l].points > highestPoints) {
      highestPoints = players[l].points;
    }
  }
  for (var m = 0; m < players.length; m++) {
    if (players[m].points === highestPoints) {
      console.log('The winner is: ', players[m]);
    }
  }
}
playGame(players, cards);
