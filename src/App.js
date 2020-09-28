import React from 'react';
import List from './components/List';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Search/>
        </div>
        <div className="row">
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
