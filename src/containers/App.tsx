import React from 'react';
const Image = require('../assets/image.jpg');
import value from '../assets/names.json';

const App = () => (
  <>
    <h1>A new react project</h1>
    {value.names.map((a: string) => <p key={a}>{a}</p>)}
    <img src={Image} alt="" />
  </>
);

export default App;
