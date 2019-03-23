import React from 'react';
import './App.scss';

const reactImg = require('../static/images/react.png');
const webpackImg = require('../static/images/webpack.png');

const App = () => (
  <div>
    <h1 className="title">React App</h1>
    <div className="react-webpack">
      <img src={reactImg} alt="react logo" />
      <img src={webpackImg} alt="webpack logo" />
    </div>
  </div>
);

export default App;
