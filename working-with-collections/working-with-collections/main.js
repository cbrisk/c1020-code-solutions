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

  for (var k = 0; k < players; k++) {
    players[k].hand = (_.pullAt(cards, [0, 1]));
    var card1 = players[k].hand[0].rank;
    var card2 = players[k].hand[1].rank;
    if (card1 === rank[0] && card2 === rank[9]) {
      players[k].points += 21;
    } else {
      players[k].points += pointsVal[_.indexOf(rank, card1)];
      players[k].points += pointsVal[_.indexOf(rank, card2)];
    }
  }

  for (var l = 0; l < players; l++) {
    var winner = null;
    var highestPoints = 0;
    if (players.points > highestPoints) {
      winner = players[l];
    }
    console.log('The winner is: ', winner);
  }
}
playGame(players, cards);
