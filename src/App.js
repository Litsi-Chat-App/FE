// Dependencies
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import HomeScreen from './Components/HomeScreen';
import ChatRoom from './Components/ChatRoom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/:roomname" component={ChatRoom} />
    </div>
  );
}

export default App;
