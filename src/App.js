import React from 'react';
import Firebase from "firebase";
import List from './components/List';
import Search from './components/Search';
import * as FirestoreService from './services/firestore';
import './App.css';

function App() {
  Firebase.initializeApp(config);
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
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        className="float"
        target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}

export default App;
