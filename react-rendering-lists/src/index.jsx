import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {

  render() {
    const pokedex = [
      { number: '001', name: 'Bulbasaur' },
      { number: '004', name: 'Charmander' },
      { number: '007', name: 'Squirtle' },
      { number: '025', name: 'Pikachu' },
      { number: '039', name: 'Jigglypuff' }
    ];
    return (
      <ul>
        {pokedex.map(card =>
          <li key={card.number}>
            {card.name}
          </li>
        )}
      </ul>
    );
  }
}

ReactDOM.render(
  <List />,
  document.querySelector('#root')
);
