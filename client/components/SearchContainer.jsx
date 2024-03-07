import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import AlbumArt from './AlbumArt.jsx';
const SearchContainer = () => {
  const [image, setImage] = useState('https://upload.wikimedia.org/wikipedia/en/2/2a/2014ForestHillsDrive.jpg');

  const changeImg = (e) =>{
    e.preventDefault();
    console.log('WORKING??????')
    setImage(inputValue);
  }

  return(
    <div id="searchArt">
      <div id="searchContainer">
        <SearchBar changeImg={changeImg}/>
      </div>
      <AlbumArt onSubmit="" src={image}/>
    </div>
  )
}
export default SearchContainer;