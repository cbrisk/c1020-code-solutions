import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion.jsx';

const topics = [
  {
    topic: 'Hypertext Markup Language', details: `Hypertext Markup Language(HTML) is the standard markup language for creating web pages
      and web applications. With Cascading Style Sheets(CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.`
  },
  {
    topic: 'Cascading Style Sheets', details: `Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a
      markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.`
  },
  {
    topic: 'JavaScript', details: `JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript
      specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket
      syntax, dynamic typing, prototype-based object-orientation, and first-class functions.`
  }
]

const element = <Accordion list={topics}/>
ReactDOM.render(
  element,
  document.querySelector('#root')
);
