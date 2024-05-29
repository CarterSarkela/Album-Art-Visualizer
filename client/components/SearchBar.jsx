import React, { useState } from 'react';
const albumArt = require('album-art');

const SearchBar = ({ changeImg, image }) => {
  const [album, setAlbum] = useState('');

  const handleSubmit = async (e) => {
    const splitQuery = album.split("/")
    e.preventDefault(); //prevent refresh
    const url = await albumArt(splitQuery[0], {album: splitQuery[1]});
    changeImg(url);
    // changeImg(album);//original line
    setAlbum(''); //clear form after submit
  };

  const handleChange = (e) => {
    setAlbum(e.target.value);
  };

  return (
    <div id='searchForm'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={album}
          onChange={handleChange}
          id='searchBar'
          placeholder="Enter any Artist/album: i.e. ' J Cole 2014 Forest Hills Drive'"
        ></input>
        <input type='submit' id='submit' value='Search' />
      </form>
    </div>
  );
};
export default SearchBar;
