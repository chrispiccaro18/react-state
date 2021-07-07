import React from 'react';
import RandomColor from './RandomColor';

const colorArr = ['red', 'yellow', 'blue', 'green', 'orange', 'pink'];

export default function App() {
  return (
    <>
      <RandomColor colors={colorArr}/>
    </>
  );
}
