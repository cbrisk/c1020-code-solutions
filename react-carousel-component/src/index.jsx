import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel.jsx';

const images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

const element = <Carousel imageList={images} />
ReactDOM.render(
  element,
  document.querySelector('#root')
);
