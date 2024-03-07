import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import AlbumArt from './AlbumArt.jsx';
const SearchContainer = () => {
  const [imageLink, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/en/2/2a/2014ForestHillsDrive.jpg'
  );

  const changeImg = (url) => {
    console.log('WORKING??????');
    setImage(url);
  };

  return (
    <div id='searchArt'>
      <div id='searchContainer'>
        <SearchBar changeImg={changeImg} />
      </div>
      <AlbumArt imageLink={imageLink} />
    </div>
  );
};
export default SearchContainer;
