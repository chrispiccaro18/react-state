import React from 'react';
import ColorPicker from './ColorPicker';

const colorArr = ['red', 'yellow', 'blue'];

export default function App() {
  return (
    <>
      <ColorPicker colors={colorArr}/>
    </>
  );
}
