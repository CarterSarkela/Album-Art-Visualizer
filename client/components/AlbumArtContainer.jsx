import React from 'react';

const AlbumArtContainer = ({imageLink}) => {
  return(
    <>
      <div id='albumArtContainer'>
        <img id="albumImg" alt='Album Cover Art' src={imageLink}></img>
      </div>
    </>
  )
}
export default AlbumArtContainer;