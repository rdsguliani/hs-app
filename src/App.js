import React from 'react';

import './App.css';
import CardContainer from './containers/cardContainer/cardContainer';
import { Spinner } from './UI/spinner/spinner';

function App() {
  return (
    <div >
      <Spinner></Spinner>
      <header className="App-header">
          <h1>HighSpot Image App</h1>
      </header>

      <CardContainer></CardContainer>

    </div>
  );
}

export default App;
