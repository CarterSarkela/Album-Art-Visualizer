import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import AlbumArtContainer from './AlbumArtContainer.jsx';
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
        //get colors array
        const colors = await colorThief.getPalette(img, 5);

        //set elements selected via DOM manipulation and update the styles property
        document.body.style.setProperty(
          'background-color',
          `rgb(${colors[0]})`
        );
        if (colors[1]) {
          document
            .querySelector('#searchContainer')
            .style.setProperty('background-color', `rgb(${colors[1]})`);
        } else {
          document
            .querySelector('#searchContainer')
            .style.setProperty('background-color', `rgb(${colors[0]})`);
        }
        if (colors[2]) {
          document
            .querySelector('#searchContainer')
            .style.setProperty('border-color', `rgb(${colors[2]})`);
        } else {
          document
            .querySelector('#searchContainer')
            .style.setProperty('border-color', `rgb(${colors[0]})`);
        }
        if (colors[4]) {
          document.querySelectorAll('h1').forEach((el) => {
            el.style.setProperty('border-color', `rgb(${colors[4]})`);
          });
        } else {
          document.querySelectorAll('h1').forEach((el) => {
            el.style.setProperty('border-color', `rgb(${colors[1]})`);
          });
        }

        if (colors[3]) {
          document
            .querySelector('#leftDiv')
            .style.setProperty('background-color', `rgb(${colors[3]})`);
          document
            .querySelector('#rightDiv')
            .style.setProperty('background-color', `rgb(${colors[3]})`);
        } else {
          document
            .querySelector('#leftDiv')
            .style.setProperty('background-color', `rgb(${colors[1]})`);
          document
            .querySelector('#rightDiv')
            .style.setProperty('background-color', `rgb(${colors[1]})`);
        }
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
      <AlbumArtContainer imageLink={imageLink} />
      {/* <ColorPalette/> */}
    </div>
  );
};
export default SearchContainer;
