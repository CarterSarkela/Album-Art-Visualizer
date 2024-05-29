import React from "react";

const ColorPalette = () => {
  const colors = ['Black', 'Blue', 'Green', 'Yellow', 'White'] 
  return(
    <div id='colorPalette'>
      {colors.map((el, index) => (
        <div class='colorCircle'>{colors[index]}</div>
      ))}
    </div>
  )
}

export default ColorPalette;