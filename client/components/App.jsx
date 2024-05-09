import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchContainer from './searchContainer.jsx';
import '../style.scss';

const App = () => {
  return (
    <div id='app'>
      <h1 id='mainHeader'>Album Art Color Picker</h1>
      <SearchContainer />
      <p id='createdBy'>Created by: Carter Sarkela</p>
    </div>
  );
};
export default App;
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
