import React from 'react';

const ColorPalette = () => {
  const placeholderColors = ['Black', 'Blue', 'Green', 'Yellow', 'White'];
  let key = 0;
  return (
    <div id='colorPalette'>
      {placeholderColors.map((el, index) => (
        <div className='colorCircle' key={key++}>{placeholderColors[index]}</div>
      ))}
    </div>
  );
};

export default ColorPalette;
