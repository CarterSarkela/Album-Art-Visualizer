import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';

const AlbumArt = ({imageLink}) => {
  return(
    <div id='albumArt'>
      <img id="albumImg" alt='Album Cover Art' src={imageLink}></img>
    </div>
  )
}
export default AlbumArt;