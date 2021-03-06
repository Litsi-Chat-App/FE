// Dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomeScreen from './Components/HomeScreen';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomeScreen} />
    </div>
  );
}

export default App;
