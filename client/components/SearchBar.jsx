import React, { useState, useEffect } from 'react';
import AlbumArt from './AlbumArt.jsx';

const SearchBar = ({ changeImg, image }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); //prevent refresh
    changeImg(url);
    setUrl(''); //clear form after submit
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div id='searchForm'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={url}
          onChange={handleChange}
          id='searchBar'
          placeholder="Enter any album: i.e. '2014 Forest Hills Drive'"
        ></input>
        <input type='submit' id='submit' value='Search' />
      </form>
    </div>
  );
};
export default SearchBar;
