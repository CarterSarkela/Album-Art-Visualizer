import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';

const AlbumArt = ({image}) => {
  return(
    <div id='albumArt'>
      <img id="albumImg" alt='Album Cover Art' src={image}></img>
    </div>
  )
}
export default AlbumArt;