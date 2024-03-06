import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import AlbumContainer from './AlbumContainer.jsx'
import '../style.scss'

const App = () => {
  return (
    <div>
    <h1>React is working!</h1>
    <AlbumContainer/>
    </div>
  )
}
export default App;
const root = createRoot(document.querySelector('#root'));
root.render(<App />,);