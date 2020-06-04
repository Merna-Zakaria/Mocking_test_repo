import React, { useEffect } from 'react';
import './App.css';
import * as math from './components/math.js/Math';
import { fetchData } from './components/fetchData/FetchData';

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

function App() {
  useEffect(() => {
    fetchData('users')
  })
  return (
    <div className="App">
    <h1> Hiii from mock-testing-repo</h1>
     <button onClick={() => fetchData('users')}>Click Me</button>
    </div>
  );
}

export default App;
