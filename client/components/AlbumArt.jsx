import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';

const AlbumArt = ({imageLink}) => {
  return(
    <div id='albumArt'>
      <div id='leftDiv'></div>
      <img id="albumImg" alt='Album Cover Art' src={imageLink}></img>
      <div id='rightDiv'></div>
    </div>
  )
}
export default AlbumArt;