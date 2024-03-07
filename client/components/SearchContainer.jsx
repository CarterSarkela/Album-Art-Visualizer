import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.jsx';
import AlbumArt from './AlbumArt.jsx';
import '../style.scss';
import ColorThief from 'colorthief/dist/color-thief.mjs';

const SearchContainer = () => {
  const [imageLink, setImage] = useState(
    'https://upload.wikimedia.org/wikipedia/en/2/2a/2014ForestHillsDrive.jpg'
  );

  const changeImg = (url) => {
    setImage(url);
    const colorThief = new ColorThief();
    const img = document.createElement('img');
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = async () => {
      try {
        const colors = await colorThief.getPalette(img, 5);
        console.log('colors!!!!: ', colors);
        document.body.style.setProperty(
          'background-color',
          `rgb(${colors[0]})`
        );
        document
          .querySelector('#searchContainer')
          .style.setProperty('background-color', `rgb(${colors[1]})`);
        document
          .querySelectorAll('div')
          .forEach((el) =>
            el.style.setProperty('border-color', `rgb(${colors[2]})`)
          );
        document.querySelectorAll('h1').forEach((el) => {
          el.style.setProperty('border-color', `rgb(${colors[3]})`);
        });

        // document.body.style.setProperty('background-color', `rgb(${colors[3]})`)
        // document.body.style.setProperty('background-color', `rgb(${colors[4]})`)
      } catch (err) {
        console.error('Error: ', err);
      }
    };
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
