import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
// eslint-disable-next-line 
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
<div id ="root" > </div>
ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);