import React, { useState, useEffect } from 'react';
import AlbumArt from './AlbumArt.jsx';

const SearchBar = ({ changeImg }) =>{

  
  return(
    <div id="searchForm">
      <form onSubmit={changeImg}>
      <input type="text" id='searchBar' placeholder="Enter any album: i.e. '2014 Forest Hills Drive'"></input>
      <input type="submit" id="submit" value="Search"/>
      </form>
    </div>
  )
}
export default SearchBar;