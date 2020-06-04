import React from 'react';
import './App.css';
import * as math from './components/math.js/Math';

export const doAdd      = (a, b) => math.add(a, b);
export const doSubtract = (a, b) => math.subtract(a, b);
export const doMultiply = (a, b) => math.multiply(a, b);
export const doDivide   = (a, b) => math.divide(a, b);

function App() {
  return (
    <div className="App">
     Hiii from app
    </div>
  );
}

export default App;
