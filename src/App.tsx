import React from 'react';
import './App.css';
import {PlayerListContainer} from "./containers/playerListContainer";

function App() {
  //1. Strongly-typed function components props
  const Hello = ({ who }: { who: string }) => (
      <p>Hello, {who}</p>
  );
 /* function Hello({ who }: Props) {
    return <p>Hello, {who}</p>
  }*/

  return (
    <div className="App">
      <Hello who="Mary" />
      <PlayerListContainer/>
    </div>
  );
}

export default App;
